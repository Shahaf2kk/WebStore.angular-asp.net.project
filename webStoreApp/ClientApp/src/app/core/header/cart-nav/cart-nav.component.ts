import { Component, OnInit } from '@angular/core';

import { ProductsDataService } from 'src/app/shared/products-data.service';
import { CartService } from 'src/app/cart/cart.service';

import { faShoppingCart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.css']
})
export class CartNavComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faCartArrowDown = faCartArrowDown;

  constructor(private dataProduct: ProductsDataService,
              private cartService: CartService ) { }

  ngOnInit() {
  }

  goDirToOrder() {
    this.dataProduct.getCartProduct();
    this.cartService.setOrderDir();
  }

}
