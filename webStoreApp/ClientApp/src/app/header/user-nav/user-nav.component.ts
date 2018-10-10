import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faBan, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

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

  quickLogin: boolean;
  username: string;
  pass: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.quickLogin = false;
    this.username = '';
    this.pass = '';
  }


  cancelQuickLogin() {
    this.quickLogin = false;
  }
  onPassEnter(event: any) {
    if (this.username === '') {
      console.log('user name empty');
      return;
    }
    if (event.key === 'Enter') {
      console.log('enter');
    }
  }
  openQuickLogin() {
    if (this.quickLogin === true) {
      this.quickLogin = false;
      this.router.navigate(["login"]);
    } else {
      this.quickLogin = true;
    }
  }
}
