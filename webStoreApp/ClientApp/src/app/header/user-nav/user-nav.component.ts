import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { faSignInAlt, faBan, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})

export class UserNavComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faPlusSquare = faPlusSquare;
  faBan = faBan;
  faArrowAltCircleRight = faArrowAltCircleRight;

  isAuth: boolean;
  quickLogin = false;
  user: string;



  constructor(private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuth();
  }
  // setAuth(isAuth: boolean) {
  //   this.isAuth = isAuth;
  // }

  cancelQuickLogin() {
    this.quickLogin = false;
  }
  signOut() {
    this.authService.delToken();
    // this.isAuth = false;
    this.authService.homeUrl();
  }
  onSubmitNav(form: NgForm) {
    if (form.valid) {
     this.user = form.controls['username'].value;
      const pass = form.controls['pass'].value;
      this.authService.signinUser(this.user, pass);
      this.cancelQuickLogin();
     // this.isAuth = true;
    }
  }
  // onPassEnter(event: any) {
  //   if (this.username === '') {
  //     console.log('user name empty');
  //     return;
  //   }
  //   if (event.key === 'Enter') {
  //   }
  // }
  openQuickLogin() {
    if (this.quickLogin === true) {
      this.quickLogin = false;
      this.router.navigate(['signin']);
    } else {
      this.quickLogin = true;
    }
  }
}
