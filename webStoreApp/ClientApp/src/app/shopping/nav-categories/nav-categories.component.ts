import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.css']
})
export class NavCategoriesComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  categories: string[];
  categorySelected: boolean[] = [false];

  ngOnInit() {
    this.categories = this.shoppingService.getCategoryName();
  }

  onCategory(index: number) {
    if (this.categorySelected[index] === true) {
      this.categorySelected[index] = false;
      return;
    }
    this.categorySelected = [false];
    this.categorySelected[index] = true;
  }
    // onCategory(index: number) {
    // }
  // clickOnCategory(category: string, itemSelected: number) {
  //     this.categorySelected = category;
  //     if (this.itemSelected === itemSelected) {
  //       this.itemSelected = -1;
  //       this.activeSubCateDiv = !this.activeSubCateDiv;
  //     } else {
  //       this.itemSelected = itemSelected;
  //       this.activeSubCateDiv = true;
  //     }
  // }
  // outSideClick(event: any) {
  //   const eClass = event.target.getAttribute('class');
  //   if (eClass === null) {
  //     this.activeSubCateDiv = false;
  //     this.itemSelected = -1;
  //     return;
  //   }
  //   if (!eClass.includes('clickOut')) {
  //     this.activeSubCateDiv = false;
  //     this.itemSelected = -1;
  //   }
  // }
}
