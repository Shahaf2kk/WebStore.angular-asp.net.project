import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})

export class UserNavComponent implements OnInit {
  userAuth: boolean;
  errorMsg: string;
  username: string;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.userDetails
      .subscribe( userData => {
        this.userAuth = userData.isAuth;
        this.username = userData.User.userName;
      });
  }

  signOut() {
    this.authService.delToken();
    this.router.navigate(['/']);
  }

}
