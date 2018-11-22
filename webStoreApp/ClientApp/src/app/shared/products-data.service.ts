import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../cart/cart.service';
import { ShoppingService } from '../shopping/shopping.service';
import { Product } from '../model/product.model';

@Injectable()
export class ProductsDataService {
    private baseUrl = 'https://localhost:44327/';

    constructor(private http: HttpClient,
                private authService: AuthService,
                private cartService: CartService,
                private shoppingService: ShoppingService
                ) {
    }

    getCartProduct() {
        this.http.get(this.baseUrl + 'data/cart', { headers: this.authService.getHeaders(),
        responseType: 'json', observe: 'response'})
        .subscribe(
            (data) => {
                this.cartService.setItems(data.body);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    getProductByCategory(cate: string) {
        this.http.get<Product[]>(this.baseUrl + 'product/category', { params: {
            'category': cate
        }, responseType: 'json', observe: 'response'})
        .subscribe(
            (data) => {
                this.shoppingService.setProducts(data.body);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    getProductBySubCategory(cate: string, subCate: string) {
        this.http.get(this.baseUrl + 'product/category', { params: {
            'category': cate,
            'subCategory': subCate
        }, responseType: 'json', observe: 'response'})
        .subscribe(
            (data) => {
                this.shoppingService.setProducts(data.body);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    getProductById(id: number): Observable<any> {
        return this.http.get(this.baseUrl + 'product/id', { params: {
            'id': id.toString()
        }, responseType: 'json', observe: 'response' });
    }
}
