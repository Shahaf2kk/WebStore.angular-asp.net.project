import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsDataService } from '../../shared/products-data.service';
import { Product } from '../../model/product.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit, OnDestroy {
  id: number;
  product: Product;
  constructor(private activeRouter: ActivatedRoute,
              private productsData: ProductsDataService,
              private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingService.onInitSubject();
    this.activeRouter.params
      .subscribe(
        (params: Params) => {
          this.id = +params['item'];
          this.getProduct();
      });
    this.shoppingService.changeItem
      .subscribe((data) => {
        this.product = data;
      });
  }

  getProduct() {
    if (!this.shoppingService.getProductByResProducts(this.id)) {
        this.productsData.getProductById(this.id);
    }
  }

  ngOnDestroy() {
    this.shoppingService.unsubscribeitemSubject();
  }

}
