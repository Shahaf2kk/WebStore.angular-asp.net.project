import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { ProductList } from './shop/shop.module';

@Injectable()
export class ServerService {
    private product: ProductList[] = [];

    constructor(private http: Http) {}
    public getProduct() {
        return this.product;
    }

    loadProductFromServer(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('https://localhost:44327/product')
            .pipe(map((response: Response) => {
                const data = response.json();
                return data;
            }))
            .subscribe((product: ProductList[]) => {
                this.product = product;
                resolve(true);
            });
        });
    }
    // getProduct() {
    //     return new Promise((resolve, reject) => {
    //         this.http.get('https://localhost:44327/product')
    //         .map(res => res.json())
    //         .subscribe(
    //             response => {
    //                 this.shopService.setDataProduct(response['value']);
    //                 resolve(true);
    //             }
    //         );
    //     });
    // }
    // loadProduct() {
    //     this.http.get('https://localhost:44327/product')
    //         .pipe(map(
    //             (response: Response) => {
    //                 const data = response.json();
    //                 return data;
    //             }
    //         ))
    //         .subscribe(
    //             (product: ProductList[]) => {
    //                 this.product = product;
    //             }
    //         );
    //     if (this.product != null) {
    //         return true;
    //     }
    //     return false;
    // }
    // getProduct() {
    //     console.log('get product from server service');
    //     this.http.get('https://localhost:44327/product')
    //     .pipe(map(
    //         (response: Response) => {
    //             const product: ProductList[] = response.json();
    //             this.shopService.setDataProduct(product);
    //             console.log(product);

    //         },
    //         (error: any) => { console.log(error); }
    //     ));
    // }
}
