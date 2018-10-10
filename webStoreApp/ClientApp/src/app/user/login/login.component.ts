import { Component, OnInit } from '@angular/core';
import { faUser, faUnlock, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faUnlock = faUnlock;
  faUserCircle = faUserCircle;

  constructor() { }

  ngOnInit() {
  }

}
