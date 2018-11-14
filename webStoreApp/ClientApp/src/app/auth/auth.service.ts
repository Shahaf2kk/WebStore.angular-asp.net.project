import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { User } from '../user.model';
// import { UserNavComponent } from '../header/user-nav/user-nav.component';

@Injectable()
export class AuthService {
  private t = null;
  private baseUrl = 'https://localhost:44327/';
  private headers: HttpHeaders;
  errorMsg;
  constructor (private http: HttpClient,
     private router: Router) {
    this.t = this.getToken();
  }

  getErrorMsg() {
    return this.errorMsg;
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
          }
          homeUrl() {
            this.router.navigate(['']);
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
            console.log('end error handler');
            return throwError('');
          }
          setToken(token: string) {
    this.delToken();
    localStorage.setItem('t', 'Bearer ' + token);
   // this.userNavAuth.setAuth(true);
  }
  getToken() {
    return localStorage.getItem('t');
  }
  setHeaders() {
    if (this.t !== null) {
      this.headers = new HttpHeaders().set('Authorization', this.getToken());
    }
  }
  getHeaders() {
    return this.headers;
  }
  delToken() {
    localStorage.clear();
  }
  isAuth() {
    const a = this.getToken();
    console.log(a);
    return this.getToken() !== null;
  }
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
