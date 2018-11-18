import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Injectable()
export class AuthService {
  private token;
  private baseUrl = 'https://localhost:44327/';
  private headers: HttpHeaders;
  private user: User = new User();

// ---- object for nav user - if isAuth - start
  private authSubject = new BehaviorSubject<{User: User, isAuth: boolean}>( { User: this.user, isAuth: false } );
  userDetails = this.authSubject.asObservable();
// ---- object for nav user - if isAuth - end


  constructor (private http: HttpClient,
     private router: Router) {
    this.isAuth();
  }

  changeIfAuth(isAuth: boolean) {
    this.authSubject.next({ User: this.user, isAuth: isAuth });
  }

  signinUser(usernmae: string, pass: string): Observable<any> {
    return this.http.get(this.baseUrl + 'users/signin',
    { params: { 'username': usernmae, 'pass': pass },
    responseType: 'text', observe: 'response'}); // .pipe(
      // catchError(this.handleError)
      // );
    }


  signupUser(user: User): Observable<any> {
    return this.http.post(this.baseUrl + 'users/signup', {}, { params: {
      'username': user.userName,
      'pass': user.pass,
      'email': user.email
    }, responseType: 'text', observe: 'response'});

  }

  afterSignInOrUp(data) {
    this.setToken(data);
    this.getUserNavData().subscribe(
      (userData) => {
        this.user.userName = userData.body['userName'];
        this.user.listOfCart = userData.body['cartDetails'];
        this.authSubject.next({ User: this.user, isAuth: true });
      },
      (error) => {
        console.log('error msg ');
        console.log(error);
        this.authSubject.next({ User: this.user, isAuth: false });
      }
    );
    this.homeUrl();
  }

  homeUrl() {
    this.router.navigate(['']);
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
    return false;
  }


  delToken() {
    localStorage.clear();
    this.user = new User();
    this.authSubject.next({ User: this.user, isAuth: false });
  }
  isAuth() {
    if (this.getTokenAndSetHeaders()) {
      this.getUserNavData().subscribe(
        (data) => {
          this.user.userName = data.body['userName'];
          this.user.listOfCart = data.body['cartDetails'];
          this.authSubject.next({ User: this.user, isAuth: true });
        },
        (error) => {
          this.delToken();
        }
      );
    } else {
      this.authSubject.next({ User: this.user, isAuth: false });
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
      if (errorRes.status === 404) {
        return errorRes.error;
      }
    }
    return throwError('');
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
