import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { CartService } from '../../cart.service';

import { CartItem } from '../../../model/cart-item.model';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnChanges {

  @Input() item: CartItem;
  @Input() index: number;
  @Input() checkbox: boolean;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToOrder() {
    this.cartService.addToSelectedProduct(this.index);
  }
  ngOnChanges() {
    if (this.checkbox) {
      this.addToOrder();
    }
  }


}
