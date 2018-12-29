import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { CartService } from '../../cart.service';

import { CartItem } from '../../../model/cart-item.model';
import { ProductsDataService } from '../../../shared/products-data.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnChanges {

  @Input() item: CartItem;
  @Input() index: number;
  @Input() checkbox: boolean;
  @Output() hasDelete = new EventEmitter<number>();

  constructor(private cartService: CartService,
              private dataProduct: ProductsDataService) { }

  ngOnInit() {
  }

  addToOrder() {
    this.cartService.addToSelectedProduct(this.index);
  }

  deleteFromCart() {
    this.dataProduct.deleteCartItem(this.item.productDetails.id);
    this.hasDelete.emit(this.index);
  }
  ngOnChanges() {
    if (this.checkbox) {
      this.addToOrder();
    }
  }


}
