import { Product, ProductsName } from '../model/product.model';
import * as Rx from 'rxjs';

export class ShoppingService {

    private items: Product[];
    private itemSubject: Rx.BehaviorSubject<Product>;
    changeItem: Rx.Observable<Product>;

    private productsCategoryNames: [{categoryNames: string, subCategoryNamesArray: string[] }];
    private productsNames: ProductsName[];
    private topProducts: Product[];

    defImage = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';


    constructor ( ) { }

    unsubscribeitemSubject() {
        this.itemSubject.unsubscribe();
    }

    onInitSubject() {
        this.itemSubject = new Rx.BehaviorSubject<Product>(new Product);
        this.changeItem = this.itemSubject.asObservable();
    }

    setTopProducts(data: Product[]) {
        this.topProducts = data;
    }

    getProductsBySearchWord(word: string) {
        let resArray: number[] = [];
        const resId = this.productsNames.filter(e => {
            const el = e.id.toString().includes(word);
            return el;
        }).map(e => e.id);
        const resNames = this.productsNames.filter(e => {
            const el = e.name.toLowerCase().includes(word.toLowerCase());
            return el;
        }).map(e => e.id);
        if (resId.length > 0) {
            if (resNames.length > 0) {
                resArray = resId.concat(resNames);
            } else {
                resArray = resId;
            }
        } else if (resNames.length > 0 ) {
            resArray = resNames;
        }
        return resArray;
    }
    getTopProductsByCate(cate: string): Product[] {
        const products: Product[] = [];
        this.topProducts.forEach(el => {
            if (el.category === cate) {
                products.push(el);
            }
        });
        return products;
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

    getCategoryName(): string[] {
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

    restartProducts() {
        this.items = [];
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
                this.itemSubject.next(product);
                return true;
            }
        }
        return false;
    }
}
