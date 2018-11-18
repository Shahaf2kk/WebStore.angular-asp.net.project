import { Injectable } from '@angular/core';

import { ShopService } from '../shop/shop.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsDataService {
    private baseUrl = 'https://localhost:44327/';

    constructor(private shopService: ShopService,
                private http: HttpClient ) {
    }

    // --- call from APP_INITIALIZER
    getCategoriesNames(): Promise<any> {
        return new Promise((res, req) => {
            this.http.get(this.baseUrl + 'product/names', { responseType: 'json', observe: 'response'})
            .subscribe(
                data => {
                    this.shopService.setCategoryName(data.body);
                    res(true);
                },
                error => {
                    console.log(error);
                }
            );
        });
    }
    // --- End

    getProductByCategory(cate: string): Observable<any> {
        return this.http.get(this.baseUrl + 'product/category', { params: {
            'category': cate
        }, responseType: 'json', observe: 'response'});
    }

    getProductBySubCategory(cate: string, subCate: string): Observable<any> {
        return this.http.get(this.baseUrl + 'product/category', { params: {
            'category': cate,
            'subCategory': subCate
        }, responseType: 'json', observe: 'response'});
    }

    getProductById(id: number): Observable<any> {
        return this.http.get(this.baseUrl + 'product/id', { params: {
            'id': id.toString()
        }, responseType: 'json', observe: 'response' });
    }

}
