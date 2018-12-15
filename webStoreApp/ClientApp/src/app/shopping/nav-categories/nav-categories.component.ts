import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.css']
})
export class NavCategoriesComponent implements OnInit {


  categories: string[];
  indexCelected: number;

  constructor(private shoppingService: ShoppingService) { }


  ngOnInit() {
    this.categories = this.shoppingService.getCategoryName();
  }

  selectSubCate(index: number) {
    if (index === this.indexCelected) {
      this.indexCelected = -1;
      return;
    }
    this.indexCelected = index;
  }
}
