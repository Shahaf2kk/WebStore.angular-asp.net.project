import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  user: User = new User();
  errorMsg;
  afterSubmit: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.afterSubmit = false;
  }
  ngOnDestroy() {
    this.user = null;
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.user.userName = form.controls['username'].value,
      this.user.pass = form.controls['pass'].value;
      this.user.email = form.controls['email'].value;
      this.authService.signupUser(this.user)
      .subscribe((data) => {
        this.user = JSON.parse(data.body);
        const userData = this.user.token;
        this.authService.afterSignInOrUp(userData, '');
      }, (error) => {
        this.errorMsg = this.authService.handleError(error);
        this.afterSubmit = true;
      });
    }
    form.reset();
  }
}
