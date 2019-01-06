import { Product } from './product.model';

export class CartItem {
    public productDetails: Product;
    public qty: number = null;
    public totalCost: number = null;
    public selected = false;
}
