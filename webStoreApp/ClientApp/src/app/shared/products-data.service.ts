import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProductsDataService {
    private baseUrl = 'https://localhost:44327/';

    constructor(
                private http: HttpClient,
                private authService: AuthService ) {
    }



    getCartProduct(): Observable<any> {
        return this.http.get(this.baseUrl + 'data/cart', { headers: this.authService.getHeaders(),
        responseType: 'json', observe: 'response'});
    }

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
