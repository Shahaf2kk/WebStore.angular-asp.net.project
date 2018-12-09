import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from 'src/app/order/order.service';
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

  constructor( ) { }

  ngOnInit() {
  }


}
