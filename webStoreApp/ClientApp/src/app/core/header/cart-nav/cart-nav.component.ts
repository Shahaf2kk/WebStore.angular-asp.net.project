import { Component, OnInit } from '@angular/core';

import { ProductsDataService } from '../../../shared/products-data.service';
import { CartService } from '../../../cart/cart.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.css']
})

export class CartNavComponent implements OnInit {
  userAuth: boolean;
  productNumber: number;

  constructor(private dataProduct: ProductsDataService,
              private cartService: CartService,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.userDetails.subscribe( userData => {
      this.userAuth = userData.isAuth;
      if (userData.User.listOfCart !== undefined) {
        this.productNumber = userData.User.listOfCart.length;
      }
    });
  }

  goDirToOrder() {
    this.dataProduct.getCartProduct();
    this.cartService.setOrderDir();
  }

}
