import { Router } from '@angular/router';
import { Order } from '../model/order.model';
import { CartItem } from '../model/cart-item.model';
import { ShipDetails } from '../model/ship-details.model';

export class OrderService {

    orderDetails = new Order();

    constructor() {
        this.orderDetails.productsId = [];
        this.orderDetails.productsQty = [];
    }
    checkIfHasProducts(): boolean {
        if (this.orderDetails.productsId.length === 0) {
            return false;
        }
        return true;
    }


    setOrderProducts(cartProducts: CartItem[]) {
        for (let i = 0; i < cartProducts.length; i++) {
            this.orderDetails.productsId.push(cartProducts[i].productDetails.id);
            this.orderDetails.productsQty.push(cartProducts[i].qty);
        }
    }

    setOrderShipping(shipDetails: ShipDetails) {
        this.orderDetails.shipDetails = shipDetails;
        return this.getOrder();
    }
    getOrder() {
        return this.orderDetails;
    }
}
