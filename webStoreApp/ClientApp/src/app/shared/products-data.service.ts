import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { CartService } from '../cart/cart.service';
import { ShoppingService } from '../shopping/shopping.service';
import { OrderService } from '../order/order.service';
import { LoadingService } from '../loading-progress/loading.service';

import { Product } from '../model/product.model';
import { Order, OrderDetails } from '../model/order.model';

@Injectable()
export class ProductsDataService {
    private baseUrl = 'https://localhost:44327/api/';

    constructor(private http: HttpClient,
                private authService: AuthService,
                private cartService: CartService,
                private shoppingService: ShoppingService,
                private orderService: OrderService,
                private loadingService: LoadingService,
                private router: Router) {
                 }

    postOrder(order: Order) {
        this.setLoading(true);
        this.http.post<OrderDetails>(this.baseUrl + 'order', { order },
            { headers: this.authService.getHeaders()
            .set('Content-Type', 'application/json'), observe: 'response'})
            .subscribe(
            data => {
                this.orderService.setOrderDetails(data.body);
                this.setLoading(false);
            },
            error => {
                this.authService.handleError(error);
                this.setLoading(false);
            });
    }


    getCartProduct() {
        this.setLoading(true);
        this.http.get(this.baseUrl + 'data/cart', { headers: this.authService.getHeaders(),
        responseType: 'json', observe: 'response'})
        .subscribe(
            (data) => {
                this.setLoading(false);
                this.cartService.setCartItem(data.body);
            },
            (error) => {
                this.authService.handleError(error);
                this.router.navigate(['']);
                this.setLoading(false);
            }
        );
    }

    deleteCartItem(productId: number) {
        this.setLoading(true);
        this.http.get(this.baseUrl + 'cart', { params: { 'productId': productId.toString() }, headers: this.authService.getHeaders(),
        observe: 'response'}).subscribe(
            data => {
                this.setLoading(false);
                this.authService.addToCart(productId, 0, true);
            },
            error => {
                console.log(error);
                this.setLoading(false);
            }
            );
        }

    setLoading(isLoading: boolean) {
        this.loadingService.setLoading(!isLoading);
    }

    getProductsByProductsId(products: number[]) {
        this.http.post<Product[]>(this.baseUrl + 'product/search', { products },
         {responseType: 'json', observe: 'response'})
        .subscribe(
            data => {
                this.shoppingService.setProducts(data.body);
                this.setLoading(false);
            },
            error => {
                console.log(error);
                this.setLoading(false);
            });
    }

    getProductByCategory(cate: string) {
        this.setLoading(true);
        this.http.get<Product[]>(this.baseUrl + 'product/category', { params: {
            'category': cate
        }, responseType: 'json', observe: 'response'})
        .subscribe(
            (data) => {
                this.setLoading(false);
                this.shoppingService.setProducts(data.body);
            },
            (error) => {
                console.log(error);
                this.setLoading(false);
            });
    }

    getProductBySubCategory(cate: string, subCate: string) {
        this.setLoading(true);
        this.http.get(this.baseUrl + 'product/category', { params: {
            'category': cate,
            'subCategory': subCate
        }, responseType: 'json', observe: 'response'})
        .subscribe(
            (data) => {
                this.setLoading(false);
                this.shoppingService.setProducts(data.body);
            },
            (error) => {
                console.log(error);
                this.setLoading(false);
            }
            );
    }

    getProductById(id: number) {
        this.setLoading(true);
        this.http.get(this.baseUrl + 'product/id', { params: {
            'id': id.toString()
        }, responseType: 'json', observe: 'response' })
        .subscribe(
        (data) => {
            this.setLoading(false);
            this.shoppingService.setProduct(data.body);
        },
        (error) => {
            this.setLoading(false);
            console.log(error);
        });
    }

    addCartProduct(id: number, qty: number, lower: boolean = false) {
        this.http.post<number>(this.baseUrl + 'cart', { }, { headers: this.authService.getHeaders(),
            params: {
             'productId': id.toString(),
             'qty': qty.toString(),
             'updateLow': lower.toString()
            }, responseType: 'json', observe: 'response' })
                .subscribe(
                    data => {
                        this.authService.addToCart(id, data.body);
                    },
                    error => console.log(error)
                );
    }

}
