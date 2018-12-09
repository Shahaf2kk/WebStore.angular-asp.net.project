import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../cart.service';

import { CartItem } from 'src/app/model/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem;
  @Input() index: number;
  checkbox = false;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToOrder() {
    this.cartService.addToSelectedProduct(this.index);
  }

}
