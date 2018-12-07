import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

import {
  faUser,
  faUnlock,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { AuthGuard } from '../auth-guard.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  faUser = faUser;
  faUnlock = faUnlock;
  faUserCircle = faUserCircle;

  errorMsg;
  afterSubmit: boolean;
  url: string;
  constructor(private authService: AuthService,
              private authGuard: AuthGuard) {}

  ngOnInit() {
    this.afterSubmit = false;
    this.authGuard.getLastUrl.subscribe(
      stateUrl => this.url = stateUrl
    );
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      const username = form.controls['username'].value;
      const pass = form.controls['pass'].value;
      this.authService.signinUser(username, pass)
      .subscribe((data) => {
        const userData = data.body;
        this.authService.afterSignInOrUp(userData, this.url);
      },
      (error) => {
        this.errorMsg = this.authService.handleError(error);
        this.afterSubmit = true;
      });
      form.reset();
    }
  }
}
