import { Component, OnInit, OnDestroy } from '@angular/core';

import { ShoppingService } from './shopping.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {

  constructor(private shoppingService: ShoppingService) { }

  hasLoading: boolean;

  ngOnInit() {
    this.shoppingService.hasLoading
    .subscribe((data: boolean) => {
      this.hasLoading = data;
    });
  }

  ngOnDestroy() {
    this.shoppingService.hasLoading.unsubscribe();
  }

}
