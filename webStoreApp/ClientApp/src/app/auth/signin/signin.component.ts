import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';

import {
  faUser,
  faUnlock,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

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
  signInForm: FormGroup;
  username = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(private authService: AuthService,
              private authGuard: AuthGuard) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      'username': this.username,
      'password': this.password
    });
    // this.signInForm.addControl('username', this.username);
    // this.signInForm.addControl('password', this.username);

    this.authGuard.getLastUrl.subscribe(
      stateUrl => this.url = stateUrl
      );
    this.afterSubmit = false;

  }
  onSubmit() {
    if (this.signInForm.valid) {
      const username = this.signInForm.value['username'];
      const pass = this.signInForm.value['password'];
      this.authService.signinUser(username, pass)
      .subscribe((data) => {
        const userData = data.body;
        this.authService.afterSignInOrUp(userData, this.url);
      },
      (error) => {
        this.errorMsg = this.authService.handleError(error);
        this.afterSubmit = true;
      });
    }
    this.signInForm.reset();
    setTimeout(() => {
      this.afterSubmit = false;
    }, 10000);
  }
}
