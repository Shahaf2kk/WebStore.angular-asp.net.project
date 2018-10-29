import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { ProductList } from '../../shop.module';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css']
})
export class ShopItemsComponent implements OnInit {
  productList: ProductList[];
  categoryNames: string[];
  constructor(private productService: ShopService) { }

  ngOnInit() {
    // this.categoryNames = this.productService.getCategoryName();
  }
  // getProductByCategory(category: string) {
  //   return this.productService.getProductByCategory(category).slice(0, 6);
  // }

}
