import { Product } from './product.model';

export class CartItem {
    public productDetails: Product;
    public qty: number;
    public totalCost: number = this.productDetails.price * this.qty;
}
