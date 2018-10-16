import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { ShopService } from './shop/shop.service';
import { ProductList } from './shop/shop.module';

// dosent work need to rework and understand more http request from <Max>
// using map? with Rxjs libery.

@Injectable()
export class ServerService {
    // constructor(private http: Http, private shopService: ShopService) {}
    // getProduct() {
    //     console.log('get product from server service');
    //     this.http.get('https://localhost:44327/product')
    //     .pipe(map(
    //         (response: Response) => {
    //             const product: ProductList[] = response.json();
    //             this.shopService.setDataProduct(product);
    //         },
    //         (error: any) => { console.log(error); }
    //     ));
    }

