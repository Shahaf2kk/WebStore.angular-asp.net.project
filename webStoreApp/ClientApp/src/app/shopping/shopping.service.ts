import { Product, ProductsName } from '../model/product.model';
import * as Rx from 'rxjs';

export class ShoppingService {

    items: Product[];
    private itemSubject: Rx.BehaviorSubject<Product>;
    changeItem: Rx.Observable<Product>;

    private productsCategoryNames: [{categoryNames: string, subCategoryNamesArray: string[] }];
    private productsNames: ProductsName[];


    constructor ( ) { }

    unsubscribeitemSubject() {
        this.itemSubject.unsubscribe();
    }

    onInitSubject() {
        this.itemSubject = new Rx.BehaviorSubject<Product>(new Product);
        this.changeItem = this.itemSubject.asObservable();
    }

    setProductsNames(data: ProductsName[]) {
        this.productsNames = data;
    }

    getProductsNames(): ProductsName[] {
        return this.productsNames;
    }

    setCategoryName(cateName: any) {
        this.productsCategoryNames = cateName;
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
            if (product !== undefined) {
                console.log('call from local');
                this.itemSubject.next(product);
                return true;
            }
        }
        return false;
    }
}
