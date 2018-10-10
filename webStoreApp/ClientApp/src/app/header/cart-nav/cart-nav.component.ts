import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.css']
})
export class CartNavComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faCartArrowDown = faCartArrowDown;
  
  constructor() { }

  ngOnInit() {

  }

}
