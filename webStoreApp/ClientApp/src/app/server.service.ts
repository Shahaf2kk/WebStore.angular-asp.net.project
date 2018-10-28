import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { ProductList } from './shop/shop.module';

@Injectable()
export class ServerService {
    private product: ProductList[] = [];
    private categoriesNames;

    constructor(private http: Http) {}
    public getProduct() {
        return this.product;
    }
    public getCategoriesNames() {
        return this.categoriesNames;
    }

    loadProductFromServer(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('https://localhost:44327/product/')
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
    loadCategoriesNames(): Promise<any> {
        return new Promise((res, reject) => {
            this.http.get('https://localhost:44327/product?onlyNames=true')
            .pipe(map((resp: Response) => {
                const data = resp.json();
                return data;
        }))
            .subscribe((categoriesNames: any) => {
                this.categoriesNames = categoriesNames;
                res(true);
            });
        });
    }
}

    // signUp() {
    // }

    // signIn() {

