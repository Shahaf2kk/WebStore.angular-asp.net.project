import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

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
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.afterSubmit = false;
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      const username = form.controls['username'].value;
      const pass = form.controls['pass'].value;
      this.authService.signinUser(username, pass)
      .subscribe((data) => {
        const userData = data.body;
        this.authService.afterSignInOrUp(userData);
      },
      (error) => {
        this.errorMsg = this.authService.handleError(error);
        this.afterSubmit = true;
      });
      form.reset();
    }
  }
}
