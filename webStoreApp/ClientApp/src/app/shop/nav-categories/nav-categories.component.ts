import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop/shop.service';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.css']
})
export class NavCategoriesComponent implements OnInit {
  constructor(private shopItem: ShopService) { }
  categories: string[];
  categorySelected: string;
  itemSelected: number;
  activeSubCateDiv: boolean;
  ngOnInit() {
    this.categories = this.shopItem.getCategoryName();
  }

  clickOnCategory(category: string, itemSelected: number) {
      this.categorySelected = category;
      if (this.itemSelected === itemSelected) {
        this.itemSelected = -1;
        this.activeSubCateDiv = !this.activeSubCateDiv;
      } else {
        this.itemSelected = itemSelected;
        this.activeSubCateDiv = true;
      }
  }
  outSideClick(event: any) {
    const eClass = event.target.getAttribute('class');
    if (eClass === null) {
      this.activeSubCateDiv = false;
      this.itemSelected = -1;
      return;
    }
    if (!eClass.includes('clickOut')) {
      this.activeSubCateDiv = false;
      this.itemSelected = -1;
    }
  }
}
