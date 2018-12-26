import { Component, OnInit, OnDestroy } from '@angular/core';

import { CartService } from '../cart.service';
import { ProductsDataService } from 'src/app/shared/products-data.service';

import { CartItem } from 'src/app/model/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartProduct: CartItem[];
  errorMsg = '';
  hasProduct: boolean;
  checkedAll = false;

  constructor(private cartService: CartService,
              private productsData: ProductsDataService) { }

  ngOnInit() {
    this.cartService.onInitSubject();
    this.productsData.getCartProduct();
    this.cartService.hasProductInCart
      .subscribe((data: boolean) => this.hasProduct = data);
  }

  getCartProduct() {
    this.cartProduct = this.cartService.getCartItem();
    return this.cartProduct;
  }

  goToOrders() {
    if (!this.cartService.areSelected()) {
      this.errorMsg = 'need to chose some product';
    } else {
      this.cartService.setOrder();
    }
  }
  ngOnDestroy() {
    this.cartService.hasProductInCart.unsubscribe();
  }
  pickEverything() {
    this.checkedAll = true;
  }
}
