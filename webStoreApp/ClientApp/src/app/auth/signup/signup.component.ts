import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  user: User;
  errorMsg;
  afterSubmit: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.afterSubmit = false;
  }
  ngOnDestroy() {
    console.log('ng destroy ' + this.user);
    this.user = null;
    console.log('ng destroy after ' + this.user);
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.user.userName = form.controls['username'].value,
      this.user.pass = form.controls['pass'].value;
      this.user.email = form.controls['email'].value;
      this.authService.signupUser(this.user)
      .subscribe((data) => {
        this.user = JSON.parse(data.body);
        this.authService.setToken(this.user.token);
        this.authService.homeUrl();
      }, (error) => {
        this.errorMsg = this.authService.handleError(error);
        this.afterSubmit = true;
      });
    }
    form.reset();
  }
}
