import { Product } from '../model/product.model';
import { BehaviorSubject } from 'rxjs';


export class ShoppingService {

    items: Product[];
    private itemSubject = new BehaviorSubject<Product>(new Product);
    changeItem = this.itemSubject.asObservable();

    constructor () { }

    setProducts(items: any) {
        this.items = items;
    }

    getProducts(): Product[] {
        return this.items;
    }

    setProduct(item: any) {
        this.itemSubject.next(item);
    }

    getProductByResProducts(id: number) {
        if (this.items !== undefined) {
            const product = this.items.find(x => x.id === id);
            this.itemSubject.next(product);
            return true;
        }
        return false;
    }

}


