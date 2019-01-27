import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShoppingService } from './shopping/shopping.service';

@Injectable()
export class AppLoadService {
    private baseUrl = 'https://localhost:44327/api/';

    constructor(private http: HttpClient,
                private shoppingService: ShoppingService) { }

    getBaseUrl() {
      return this.baseUrl;
    }
// --- call from APP_INITIALIZER

    getCategoriesNames(): Promise<any> {
        return new Promise((res, req) => {
            this.http.get(this.baseUrl + 'product/names', { responseType: 'json', observe: 'response'})
            .subscribe(
                data => {
                    this.shoppingService.setCategoryName(data.body['productsCateNames']);
                    this.shoppingService.setProductsNames(data.body['productsNames']);
                    this.shoppingService.setTopProducts(data.body['topProducts']);
                    res(true);
                },
                error => {
                    console.log(error);
                }
            );
        });
    }
    // --- End
}
