import { Component, OnInit } from '@angular/core';
import { faUser, faLock, faUnlock, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome\free-regular-svg-icons';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faUser = faUser;
  faUnlock = faUnlock;
  faLock = faLock;
  faEnvelope = faEnvelope;
  faUserCircle = faUserCircle;
  constructor() { }

  ngOnInit() {
  }

}
