import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { ProductList } from './shop/shop.module';

@Injectable()
export class ServerService {
    // private product: ProductList[] = [];
    private categoriesNames;

    constructor(private http: Http) {}

    // public getProduct() {
    //     return this.product;
    // }
    public getCategoriesNames() {
        return this.categoriesNames;
    }

    loadProductFromServer(categoryName: string): Promise<any> {
        return new Promise((res, reject) => {
            this.http.get('https://localhost:44327/product/cate?category=' + categoryName)
            .pipe(map((response: Response) => {
                const data = response.json();
                return data;
            }))
            .subscribe((product: ProductList[]) => {
                // this.product = product;
                console.log('product: ' + categoryName);
                console.log(product);
                res(product);

            });
        });
    }

    loadCategoriesNames(): Promise<any> {
        return new Promise((res, reject) => {
            this.http.get('https://localhost:44327/product/names')
            .pipe(map((resp: Response) => {
                const data = resp.json();
                return data;
            }))
            .subscribe((categoriesNames: any) => {
                this.categoriesNames = categoriesNames;
                console.log('stage 1- categories: ' + this.categoriesNames);
                res(true);
                // this.loadProductFromServer().then(data => {
                    //     this.product = data;
                    //     console.log('stage 3 - product asign to this.product : ' + this.product);
                    //     res(true);
                    // });
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
                // }
