import { Product } from '../model/product.model';


export class ShoppingService {

    items: Product[];
    constructor () { }

    setProducts(items: any) {
        this.items = items;
        console.log(this.items);
    }

    getProducts() {
        return this.items;
    }
}
