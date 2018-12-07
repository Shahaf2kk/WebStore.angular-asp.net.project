import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item.model';
import { OrderService } from '../order/order.service';

@Injectable()
export class CartService {

    cartItems: CartItem[];
    cartProductSelected: CartItem[];
    constructor(private orderService: OrderService,
                private router: Router) { }


    getCartItem() {
        return this.cartItems;
    }

    setItems(items: any) {
        this.cartItems = items;
    }

    setOrder() {
        if (this.cartProductSelected !== null) {
            this.orderService.setOrderProducts(this.cartProductSelected);
            this.router.navigate(['/order']);
            return true;
        }
        return false;
    }
    addToSelectedProduct(index: number) {
        if (this.cartProductSelected === undefined) {
            console.log('adsfgh');
            this.cartProductSelected.push(new CartItem())
        }
        console.log('dasfgh');
    }
}
