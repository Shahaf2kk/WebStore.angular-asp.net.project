import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from '../../auth/auth-guard.service';
import { AuthService } from '../../auth/auth.service';
import { ProductsDataService } from '../../shared/products-data.service';

import { Product } from '../../model/product.model';


@Component({
  selector: 'app-shopping-cart-box',
  templateUrl: './shopping-cart-box.component.html',
  styleUrls: ['./shopping-cart-box.component.css']
})
export class ShoppingCartBoxComponent implements OnInit {


  @Input() product: Product;
  qty = 1;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  cartItem: { productId: Number, qty: number };
  constructor(private authService: AuthService,
              private router: Router,
              private productData: ProductsDataService,
              private authGuard: AuthGuard ) { }

  ngOnInit() {
  // ---------------------------

    // neet to get cart product items to show user if has on the cart;
      // const cartItem = this.authService.getCartItem().listOfCart.slice();
      //   // .find( e => {
      //   //   return e.productId === this.product.id;
      //   // });
      // console.log(cartItem);
      // // listOfProductCart.forEach((el) => {
      // //   if (el.productId === this.product.id) {
      // //     this.cartItem = el;
      // //   }
      // // });
  // ---------------------------

    }


  addToCart() {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/signin']);
      this.authGuard.setUrlReturn('/shopping/i/' + this.product.id.toString());
      return;
    } else {
      this.productData.addCartProduct(this.product.id, this.qty);
    }
  }
}
