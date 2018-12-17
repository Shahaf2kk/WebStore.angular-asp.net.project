import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../shopping/shopping.service';

@Component({
  selector: 'app-loading-progress',
  templateUrl: './loading-progress.component.html',
  styleUrls: ['./loading-progress.component.css']
})
export class LoadingProgressComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  hasLoading = false;

  ngOnInit() {
    this.shoppingService.hasLoading
      .subscribe((data: boolean) => {
        this.hasLoading = data;
      });
  }

}
