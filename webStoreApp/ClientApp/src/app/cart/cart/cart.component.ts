import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../model/cart-item.model';
import { CartService } from '../cart.service';
import { ProductsDataService } from '../../shared/products-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService,
              private productsData: ProductsDataService) { }

ngOnInit() {
  this.productsData.getCartProduct();
}

// ng-for calls this method until its get value that its not undefine;
// need to check performence between this approach and Rxjs ( Subject / BehaviorSubject / Subscription Etc);
getCartProducts(): CartItem[] {
  return this.cartService.getCartItem();
}

// need to add force check isAuth if Click on CartView again.
}
