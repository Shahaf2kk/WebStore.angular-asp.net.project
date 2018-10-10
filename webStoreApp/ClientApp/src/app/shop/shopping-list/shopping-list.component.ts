import { Component, OnInit } from '@angular/core';
import { ProductList } from '../shop.module';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listOfElectronics: ProductList[];
  listOfFashion: ProductList[];
  listOfMotors: ProductList[];

  // constructor(private ProductList: ShopService,
  //             private route: Router) { }
  constructor() {}

  ngOnInit() {
    // this.listOfElectronics = this.ProductList.getShoppingList('electronics', '');
    // this.listOfFashion = this.ProductList.getShoppingList('fashion', '');
    // this.listOfMotors = this.ProductList.getShoppingList('motors', '');
  }


  // navToItemDetails(id: number) {
  //   this.category = this.itemArray[id].category;
  //   this.subCategory = this.itemArray[id].subCategory;
  //   this.route.navigate(['/shop-item', this.category, this.subCategory, id ]);
  // }
}
