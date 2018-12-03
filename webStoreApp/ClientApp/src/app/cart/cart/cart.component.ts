import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartItem } from '../../model/cart-item.model';
import { CartService } from '../cart.service';
import { ProductsDataService } from '../../shared/products-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartProduct: CartItem[];

  constructor(private cartService: CartService,
              private productsData: ProductsDataService) { }

ngOnInit() {
  this.productsData.getCartProduct();
}

getCartProducts(): CartItem[] {
  this.cartProduct = this.cartService.getCartItem();
  return this.cartProduct;
}


}
