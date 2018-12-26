import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';

import { Order, OrderDetails } from '../model/order.model';
import { CartItem } from '../model/cart-item.model';
import { ShipDetails } from '../model/ship-details.model';

@Injectable()
export class OrderService {

    order: Order;
    orderDetails: OrderDetails = new OrderDetails();
    productDetails: CartItem[];
    private canEntry = false;

    constructor(private router: Router,
                private httpClient: HttpClient,
                private authService: AuthService) { }

    setOrderDetails(order: OrderDetails) {
        this.orderDetails = order;
        this.orderDetails.products.forEach((e, i) => {
            if (e.id === this.productDetails[i].productDetails.id) {
                this.orderDetails.products[i] = this.productDetails[i].productDetails;
            }
        });
        this.router.navigate(['/order/orderDetails']);
    }

    getOrderDetails() {
        return this.orderDetails;
    }

    checkIfHasProducts() {
        return this.canEntry;
    }

    setOrderProducts(cartProducts: CartItem[]) {
        if (cartProducts === undefined) {
            this.canEntry = false;
            this.router.navigate(['']);
            return;
        }
        this.order = new Order();
        this.canEntry = true;
        this.productDetails = cartProducts;
        for (let i = 0; i < cartProducts.length; i++) {
            this.order.productsId.push(this.productDetails[i].productDetails.id);
            this.order.productsQty.push(this.productDetails[i].qty);
        }
    }

    setOrderShipping(shipDetails: ShipDetails) {
        this.order.shipDetails = shipDetails;
        return this.getOrder();
    }

    getOrder() {
        return this.order;
    }

    payOrder() {
        this.httpClient.get(this.authService.getBaseUrl() + 'order/pay', {
             headers: this.authService.getHeaders(),
                observe: 'response' }).subscribe(
            (data) => {
                if (data.status === 200) {
                    this.authService.getUserNavData();
                    this.authService.updateUserNavData();
                }
            },
            error => {
                console.log(error);
            }
        );
    }
}
