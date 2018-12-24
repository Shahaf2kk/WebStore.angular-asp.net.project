import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { OrderService } from '../order/order.service';

import { CartItem } from '../model/cart-item.model';
import * as Rx from 'rxjs';

@Injectable()
export class CartService {

    cartItems: CartItem[];
    cartProductSelected: CartItem[] = [];

    hasProductInCart: Rx.Subject<{}>;

    constructor(private orderService: OrderService,
                private router: Router) { }

    areSelected(): boolean {
        return this.cartProductSelected.length === 0 ? false : true;
    }

    getCartItem() {
        return this.cartItems;
    }

    onInitSubject() {
        this.hasProductInCart = new Rx.Subject();
    }

    setCartItem(items: any) {
        this.cartItems = items;
        if (this.cartItems.length > 0 ) {
            this.hasProductInCart.next(true);
        } else {
            this.hasProductInCart.next(false);
        }
    }
    setOrder() {
    if (this.cartProductSelected !== null) {
        this.orderService.setOrderProducts(this.cartProductSelected);
        this.router.navigate(['/order']);
    }
    }
    setOrderDir() {
        if (this.cartItems !== null) {
            this.orderService.setOrderProducts(this.getCartItem());
            this.router.navigate(['/order']);
        }
    }

    addToSelectedProduct(index: number) {
        if (this.cartProductSelected === null) {
            this.cartProductSelected.push(this.cartItems[index]);
            return;
        }
        if (this.cartProductSelected.find( e => e === this.cartItems[index]) === undefined) {
            this.cartProductSelected.push(this.cartItems[index]);
            return;
        }
        const indexEl = this.cartProductSelected.findIndex( e => e === this.cartItems[index]);
        if (indexEl !== -1) {
            this.cartProductSelected.splice(indexEl, 1);
        }
    }

}
