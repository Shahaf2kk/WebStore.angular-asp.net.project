import { Component, OnInit } from '@angular/core';
import { ServerService } from './shared/data-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WebStorE';
  constructor(private serverService: ServerService) {}
  ngOnInit() {
  }
}
