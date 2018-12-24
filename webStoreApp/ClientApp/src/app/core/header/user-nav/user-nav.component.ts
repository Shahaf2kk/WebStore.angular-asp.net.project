import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { faSignInAlt, faBan, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

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
  errorMsg: string;
  afterSubmit: boolean;


  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
        this.authService.userDetails
          .subscribe( userData => {
        this.userAuth = userData.isAuth;
      });
    // this.authService.userDetails.subscribe( userData => {
    //     this.userAuth = userData.isAuth;
    //     if (this.userAuth) {
    //       this.userName = userData.User.userName;
    //       if (!(this.cartProduct === 0) ) {
    //         this.authService.hasProduct = true;
    //        } else {
    //       this.authService.hasProduct = false;
    //       }
    //     }
    //   });
      this.afterSubmit = false;
  }

  cancelQuickLogin() {
    this.quickLogin = false;
  }
  signOut() {
    this.authService.delToken();
    this.router.navigate(['/']);
  }
  // need to add --------------
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
     }
  }
  openQuickLogin() {
    if (this.quickLogin === true) {
      this.quickLogin = false;
      this.router.navigate(['signin']);
    } else {
      this.quickLogin = true;
    }
  }
}
  // ------------------------

