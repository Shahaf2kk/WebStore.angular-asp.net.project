import { Product } from '../model/product.model';
import * as Rx from 'rxjs';


export class ShoppingService {

    items: Product[];
    private itemSubject = new Rx.BehaviorSubject<Product>(new Product);
    changeItem = this.itemSubject.asObservable();

    categoriesSelectedSubject = new Rx.Subject();
    private productsCategoryNames: [{categoryNames: string, subCategoryNamesArray: string[] }];

    constructor () { }

    setCategoryName(cateName: any) {
        this.productsCategoryNames = cateName;
    }

    setCategorySelectedSubject(cate: string, sub: string) {
        this.categoriesSelectedSubject.next({cate: cate, sub: sub});
    }
    getCategoryName() {
        const categoriesNames = [];
        this.productsCategoryNames.forEach(e => {
            categoriesNames.push(e.categoryNames);
        });
        return categoriesNames;
    }

    getSubCategory(cate: string): string[] {
        let sub = [];
     this.productsCategoryNames.forEach( e => {
         if (e.categoryNames === cate) {
             sub = e.subCategoryNamesArray;
         }
        });
        return sub;
    }

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


