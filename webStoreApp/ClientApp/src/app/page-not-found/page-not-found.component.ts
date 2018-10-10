import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  errorMassege: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorMassege = this.route.snapshot.params['m'];
  }

}
