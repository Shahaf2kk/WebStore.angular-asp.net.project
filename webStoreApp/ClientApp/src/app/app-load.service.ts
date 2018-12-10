import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShoppingService } from './shopping/shopping.service';

@Injectable()
export class AppLoadService {
    private baseUrl = 'https://localhost:44327/';

    constructor(private http: HttpClient,
                private shoppingService: ShoppingService) { }

// --- call from APP_INITIALIZER
    getCategoriesNames(): Promise<any> {
        return new Promise((res, req) => {
            this.http.get(this.baseUrl + 'product/names', { responseType: 'json', observe: 'response'})
            .subscribe(
                data => {
                    this.shoppingService.setCategoryName(data.body);
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
