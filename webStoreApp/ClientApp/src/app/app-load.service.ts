import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopService } from './shop/shop.service';

@Injectable()
export class AppLoadSErvice {
    private baseUrl = 'https://localhost:44327/';

    constructor(private http: HttpClient,
                private shopService: ShopService) { }

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
}
