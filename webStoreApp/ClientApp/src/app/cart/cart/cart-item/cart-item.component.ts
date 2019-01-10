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

  defImage: string;
  newQty: number;
  edit = false;

  constructor(private cartService: CartService,
              private dataProduct: ProductsDataService) { }

  ngOnInit() {
    console.log(this.item);
    this.defImage = this.dataProduct.defImage;
   }

  addToOrder() {
    console.log(this.item);
    this.cartService.addToSelectedProduct(this.index);
  }

  editBtn() {
    this.edit = true;
    this.newQty = this.item.qty;
  }
  cancelBtn() {
    this.edit = false;
  }

  saveBtn() {
    if (this.newQty === this.item.qty) {
      this.cancelBtn();
      return;
    }
    if (this.newQty < 1) {
      this.cancelBtn();
      return;
    }
    this.dataProduct.addCartProduct(this.item.productDetails.id, this.newQty, true);
    this.item.qty = this.newQty;
    this.cancelBtn();
  }

  deleteFromCart() {
    this.dataProduct.deleteCartItem(this.item.productDetails.id);
    this.hasDelete.emit(this.item.productDetails.id);
  }

  changeCartQty() {

  }
  ngOnChanges() {
    if (this.checkbox) {
      this.addToOrder();
    }
  }


}
