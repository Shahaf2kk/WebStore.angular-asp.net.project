import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { CartItem } from '../model/cart-item.model';
import { Product } from '../model/product.model';
import * as Rx from 'rxjs';

@Injectable()
export class AuthService {
  private baseUrl = 'https://localhost:44327/';
  private headers: HttpHeaders;
  private user: User = new User();
  hasProduct: boolean;

// ---- object for nav user - if isAuth - start
  private userDetailsSubject = new Rx.BehaviorSubject<{User: User, isAuth: boolean}>( { User: this.user, isAuth: false } );
  userDetails = this.userDetailsSubject.asObservable();
// ---- object for nav user - if isAuth - end

  constructor (private http: HttpClient,
                private router: Router) {
    this.StartUpIsAuth();
  }

  // onInitBehavior() {
  //   this.userDetailsSubject = new Rx.BehaviorSubject<{User: User, isAuth: boolean}>( { User: this.user, isAuth: false } );
  //   this.userDetails = this.userDetailsSubject.asObservable();
  // }
  // onDestroyBehavior() {
  //   this.userDetailsSubject.unsubscribe();
  // }


  // getHasProduct() {
  //   return this.hasProduct;
  // }
  getBaseUrl() {
    return this.baseUrl;
  }

  changeIfAuth(isAuth: boolean) {
    this.userDetailsSubject.next({ User: this.user, isAuth: isAuth });
  }

  addToCart(id: number, qty: number) {
    for (let i = 0; i < this.user.listOfCart.length; i++) {
      const el = this.user.listOfCart[i];
      if (el.productDetails.id === id) {
        this.user.listOfCart[i].qty = qty;
        this.userDetailsSubject.next({ User: this.user, isAuth: true});
        return;
      }
    }
    const list = this.user.listOfCart;
    const cart = new CartItem();
    cart.qty = qty;
    cart.productDetails = new Product();
    cart.productDetails.id = id;
    list.push(cart);
    this.user.listOfCart = list;
    this.userDetailsSubject.next({ User: this.user, isAuth: true});
  }

  signinUser(usernmae: string, pass: string): Rx.Observable<any> {
    return this.http.get(this.baseUrl + 'users/signin',
    { params: { 'username': usernmae, 'pass': pass },
    responseType: 'text', observe: 'response'});
    }


  signupUser(user: User): Rx.Observable<any> {
    return this.http.post(this.baseUrl + 'users/signup', {}, { params: {
      'username': user.userName,
      'pass': user.pass,
      'email': user.email
    }, responseType: 'text', observe: 'response'});

  }

  afterSignInOrUp(data: string, url: string) {
    this.setToken(data);
    this.updateUserNavData();
    this.router.navigate([url]);
  }

  updateUserNavData() {
    this.getUserNavData().subscribe(
      (userData) => {
        this.user.userName = userData.body['userName'];
        this.user.listOfCart = userData.body['cartDetails'];
        this.userDetailsSubject.next({ User: this.user, isAuth: true });
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  getUserNavData() {
    if (this.getTokenAndSetHeaders()) {
      return this.http.get(this.baseUrl + 'data', { headers: this.headers, responseType: 'json', observe: 'response' });
    }
  }

  setToken(token: string) {
  this.delToken();
  localStorage.setItem('t', 'Bearer ' + token);
  }

  getTokenAndSetHeaders() {
    const t = localStorage.getItem('t');
    if (t !== null) {
      this.headers = new HttpHeaders().set('Authorization', t);
      return true;
    }
    this.delToken();
    return false;
  }
  delToken() {
    localStorage.clear();
    this.user = new User();
    this.userDetailsSubject.next({ User: this.user, isAuth: false });
  }
  StartUpIsAuth() {
    if (this.getTokenAndSetHeaders()) {
      this.getUserNavData().subscribe(
        (data) => {
          this.user.userName = data.body['userName'];
          this.user.listOfCart = data.body['cartDetails'];
          this.userDetailsSubject.next({ User: this.user, isAuth: true });
        },
        (error) => {
          this.handleError(error);
        }
      );
    } else {
      this.userDetailsSubject.next({ User: this.user, isAuth: false });
    }
  }

  insertCartDetailsData(data) {
    // let list: [{ productId: number, qty: number }];
    // for (let i = 0; i < data.length; i++) {
    //   const id = data[i]['productDetails']['id'];
    //   const qty = data[i]['qty'];
    //   list.push({ productId: id, qty: qty });
    // }
    // this.user.listOfCart = list;
  }

  isAuth() {
    if (this.getTokenAndSetHeaders()) {
      return true;
    } else {
      return false;
    }
  }

  getHeaders() {
    return this.headers;
  }

  handleError(errorRes: HttpErrorResponse) {
    if (errorRes.error instanceof ErrorEvent) {
      console.error('client side: ' + errorRes.error.message);
      console.error('status code ' + errorRes.status);
      this.router.navigate(['']);
    } else {
      if (errorRes.status === 400) {
        return errorRes.error;
      }
      if (errorRes.status === 401) {
        this.delToken();
        this.router.navigate(['/signin']);
        return errorRes.statusText;
      }
      if (errorRes.status === 404) {
        return errorRes.error;
      }
    }
  }

  // this.http.post(this.baseUrl + 'users/signup', {},
    // {params: {
      //   'username': username,
      //   'pass': pass,
      //   'email': email }, responseType: 'text', observe: 'body' }).pipe(catchError(this.handleError)).subscribe(
        //     (res) => {
          //       const token = JSON.parse(res['token']);
          //       this.setToken(token);
          //       this.homeUrl();
          //     }
          //   );
  // signinUser(username: string, pass: string) {
        //   const request = new HttpRequest<string>('GET', this.baseUrl + 'users/signin?username=' + username + '&pass=' + pass,
        //      { reportProgress: true }, );
        //   this.http.request(request).subscribe(
        //     (event: HttpEvent<any>) => {
        //       switch (event.type) {
        //         case HttpEventType.Sent:
        //         console.log('request started');
        //         break;
        //         case HttpEventType.ResponseHeader:
        //         console.log('Headers received ->', event.headers);
        //         break;
        //         case HttpEventType.DownloadProgress:
        //         const loaded = Math.round(event.loaded / 1024);
        //         console.log(`Downloading ${ loaded } kb downloaded`);
        //         break;
        //         case HttpEventType.Response:
        //         console.log('Finished -> ', JSON.parse(event.body));
        //         break;
        //       }
        //     }
        //   );
        // }
      // localStorage.setItem('Authorization', 'Bearer ' + res.body );
      //  //  localStorage.clear();
      // // console.log(JSON.parse(localStorage.getItem('Authorization')));
     // this.http.get(this.baseUrl + 'users/signin?username=' + usernmae + '&pass=' + pass)


}
