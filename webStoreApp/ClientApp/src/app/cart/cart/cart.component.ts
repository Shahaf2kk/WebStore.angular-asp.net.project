import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

import { CartService } from '../cart.service';
import { CartItem } from '../../model/cart-item.model';
import { ProductsDataService } from '../../shared/products-data.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, OnChanges {

  cartProduct: CartItem[];
  errorMsg = '';
  hasProduct: boolean;
  checkedAll = false;

  constructor(private cartService: CartService,
              private authService: AuthService,
              private productsData: ProductsDataService) { }

  ngOnInit() {
    console.log('sdsadsadsdasad');
    this.cartService.onInitSubject();
    this.productsData.getCartProduct();
    this.cartService.hasProductInCart
      .subscribe((data: boolean) => this.hasProduct = data);
  }

  deleteCartItem(index: number) {
    if (index === null) {
      return;
    }
    this.authService.addToCart(index, 0, true);
    this.cartService.deleteCartItem(index);
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

  ngOnChanges() {
    console.log('on changes');
  }

  pickEverything() {
    this.checkedAll = true;
  }
}
