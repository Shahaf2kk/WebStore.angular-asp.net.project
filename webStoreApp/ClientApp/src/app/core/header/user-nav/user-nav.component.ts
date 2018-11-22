import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { faSignInAlt, faBan, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { Observable } from 'rxjs';

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

  quickLogin = false;
  userAuth: boolean;
  userName: string;
  cartProduct: number;
  errorMsg: string;
  afterSubmit: boolean;


  constructor(private router: Router,
    private authService: AuthService
    ) {
      this.afterSubmit = false;
     }

  ngOnInit() {
    this.authService.userDetails.subscribe( userData => {
        this.userAuth = userData.isAuth;
        if (this.userAuth) {
          this.userName = userData.User.userName;
          this.cartProduct = userData.User.listOfCart.length;
        }
      });
  }

  cancelQuickLogin() {
    this.quickLogin = false;
  }
  signOut() {
    this.authService.delToken();
    this.authService.homeUrl();
  }
  onSubmitNav(form: NgForm) {
    if (form.valid) {
      const username = form.controls['username'].value;
      const pass = form.controls['pass'].value;
      this.authService.signinUser(username, pass).subscribe((data) => {
        const userData = data.body;
        this.authService.afterSignInOrUp(userData, '');
      },
      (error) => {
        this.errorMsg = this.authService.handleError(error);
        this.afterSubmit = true;
      });
      form.reset();
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
