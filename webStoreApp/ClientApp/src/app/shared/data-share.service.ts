import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { ProductList } from '../shop/shop.module';
import { ShopService } from '../shop/shop.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
    private categoriesNames: [{categoryNames: string, subCategoryNamesArray: string[] }];
    constructor(private http: Http,
                private shopService: ShopService,
                private httpClient: HttpClient ) {
    }

// --- or:
// -----------------------------------------------

//     loadCAtegoriesNames(): Promise<any> {
//         return new Promise((res, rej) => {
//             this.httpClient.get('https://localhost:44327/product/names', { responseType: 'text', observe: 'response'})
//             .pipe(map((resp) => {
//                 return resp; }))
//                 .subscribe((data) => {
//                       this.shopService.setCategoryName(data);
//                       res(true); }
//                 );
//         });
// }
// -----------------------------------------------
// --- or:
// -----------------------------------------------
    // loadCategoriesNames(): Promise<any> {
    //     return new Promise((res, reject) => {
    //         this.http.get('https://localhost:44327/product/names')
    //         .pipe(map((resp: Response) => {
    //             const data = resp.json();
    //             return data;
    //         }))
    //         .subscribe((categoriesNames: any) => {
    //                 this.shopService.setCategoryName(categoriesNames);
    //                 this.categoriesNames = categoriesNames;
    //                 res(true);
    //         });
    //     });
    // }
// -------------------------------------------------
}




// private product: ProductList[] = [];


// public getProduct() {
    //     return this.product;
    // }
    // loadProductFromServerById(id: number): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this.http.get('https://localhost:44327/product/id?id=' + id)
    //         .pipe(map((res: Response) => {
    //             return res.json();
    //         }));
    //     });
    // }
    // loadProductFromServerByCategory(categoryName: string): Promise<any> {
    //     return new Promise((resolve) => {
    //         categoryName = categoryName.replace('&', '%26');
    //         this.http.get('https://localhost:44327/product/category?category=' + categoryName)
    //         .toPromise().then((res: Response) => {
    //             this.shopService.setProductCategory(res.json());
    //             resolve(true);
    //         });
    //     });
    // }
    // loadProductFromServerBySubCategory(category: string, subCategory: string): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         category = category.replace('&', '%26');
    //         subCategory = subCategory.replace('&', '%26');
    //         this.http.get('https://localhost:44327/product/category?category=' + category + '&subCategory=' + subCategory)
    //         .pipe(map((res: Response) => {
    //             return res.json();
    //         })).subscribe((product: ProductList[]) => {
    //             resolve(product);
    //         });
    //     });
    // }

//     loadCategoriesNames(): Promise<any> {
//         return new Promise((res, reject) => {
//             this.http.get('https://localhost:44327/product/names')
//             .pipe(map((resp: Response) => {
//                 const data = resp.json();
//                 return data;
//             }))
//             .subscribe((categoriesNames: any) => {
//                 this.categoriesNames = categoriesNames;
//                 console.log(this.categoriesNames);
//                 res(true);
//                 });
//         });
//     }
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
                    // retrun obserable need to fix for get products.
    // loadProductFromServer(categoryName: string): Observable<[{category: string, products: ProductList[]}]> {
    //         const oldCate = categoryName;
    //         categoryName = categoryName.replace('&', '%26');
    //         return this.http.get('https://localhost:44327/product/cate?category=' + categoryName)
    //         .pipe(map((response: Response) => {
    //             console.log('category is: ' + oldCate);
    //             console.log('product:');
    //             console.log(response);
    //             const res: [{category: string, products: ProductList[]}] =
    //               [{ category: oldCate , products: response.json()}] ;
    //               console.log(res);
    //             return res;
    //         }));
    // }

