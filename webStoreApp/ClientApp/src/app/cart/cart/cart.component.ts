import { Component, OnInit, OnDestroy } from '@angular/core';

import { CartService } from '../cart.service';
import { ProductsDataService } from 'src/app/shared/products-data.service';

import { CartItem } from 'src/app/model/cart-item.model';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartProduct: CartItem[];
  errorMsg = '';
  hasProduct: boolean;

  constructor(private cartService: CartService,
              private productsData: ProductsDataService,
              private authService: AuthService ) { }

  ngOnInit() {
    this.productsData.getCartProduct();
    this.hasProduct = this.authService.getHasProduct();
    this.cartService.cartProductSelected = [];
  }


  ngOnDestroy() {
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
}
