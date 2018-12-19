import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  errorMsg;
  afterSubmit: boolean;
  signUpForm: FormGroup;
  username = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': this.username,
      'password': this.password,
      'email': this.email
    });
  }
  onSubmit() {
    if (this.signUpForm.valid) {
      this.user.userName = this.signUpForm.value['username'];
      this.user.pass = this.signUpForm.value['password'];
      this.user.email = this.signUpForm.value['email'];
      this.signUpForm.reset();
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
  }
}
