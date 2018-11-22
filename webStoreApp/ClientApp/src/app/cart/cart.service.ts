import { CartItem } from '../model/cart-item.model';

export class CartService {

    cartItems: CartItem[];

    constructor() { }

    getCartItem() {
        return this.cartItems;
    }

    setItems(items: any) {
        this.cartItems = items;
    }

}
