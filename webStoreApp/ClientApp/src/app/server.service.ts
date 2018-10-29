import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { ProductList } from './shop/shop.module';

@Injectable()
export class ServerService {
    private product: ProductList[] = [];
    private categoriesNames;

    constructor(private http: Http) {}
    // public getProduct(): Promise<any> {
    //     return new Promis(resolve => {
    //         this.loadProductFromServer().then(product => {
    //             this.product = product;
    //             console.log(this.product);
    //         });
    //          this.product;

    //     });
    // }
    public getProduct() {
        return this.product;
    }
    public getCategoriesNames() {
        return this.categoriesNames;
    }

    // loadProductFromServer() {
    //     console.log('load from server product');
    //         this.http.get('https://localhost:44327/product/')
    //         .pipe(map((res: Response) => {
    //             const product: ProductList[] = res.json();
    //             return product;
    //         })).subscribe((product: ProductList[]) => {
    //             this.product = product;
    //             return true;
    //         });
    // }
    loadProductFromServer(): Promise<any> {
        return new Promise((res, reject) => {
            this.http.get('https://localhost:44327/product')
            .pipe(map((response: Response) => {
                const data = response.json();
                return data;
            }))
            .subscribe((product: ProductList[]) => {
                // this.product = product;
                console.log('stage 2- product http req: ' + product);
                res(product);

            });
        });
    }
    // loadProductFromServer() {
    //     console.log('load from server product');
    //         this.pipe()
    //         .then(data => {
    //             this.product = data;
    //         });
    //         .pipe(map((res: Response) => {
    //             const product: ProductList[] = res.json();
    //             return product;
    //         })).subscribe((product: ProductList[]) => {
    //             this.product = product;
    //             return true;
    //         });
    // }

    loadCategoriesNames(): Promise<any> {
        return new Promise((res, reject) => {
            this.http.get('https://localhost:44327/product?onlyNames=true')
            .pipe(map((resp: Response) => {
                const data = resp.json();
                return data;
            }))
            .subscribe((categoriesNames: any) => {
                this.categoriesNames = categoriesNames;
                console.log('stage 1- categories: ' + this.categoriesNames);
                this.loadProductFromServer().then(data => {
                    this.product = data;
                    console.log('stage 3 - product asign to this.product : ' + this.product);
                    res(true);
                });
            });
        });
    }
}
    // loadCategoriesNames(): Promise<any> {
    //     return new Promise((res, reject) => {
    //         this.http.get('https://localhost:44327/product?onlyNames=true')
    //         .pipe(map((resp: Response) => {
    //             const data = resp.json();
    //             return data;
    //     }))
    //         .subscribe((categoriesNames: any) => {
    //             this.categoriesNames = categoriesNames;
    //             res(true);
    //         });
    //     });
    // }
// }

    // signUp() {
    // }

    // signIn() {

