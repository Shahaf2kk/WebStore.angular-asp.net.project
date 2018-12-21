import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { CartService } from '../cart/cart.service';
import { ShoppingService } from '../shopping/shopping.service';

import { Product } from '../model/product.model';
import { Order, OrderDetails } from '../model/order.model';
import { OrderService } from '../order/order.service';
import { LoadingService } from '../loading-progress/loading.service';

@Injectable()
export class ProductsDataService {
    private baseUrl = 'https://localhost:44327/';

    constructor(private http: HttpClient,
                private authService: AuthService,
                private cartService: CartService,
                private shoppingService: ShoppingService,
                private orderService: OrderService,
                private loadingService: LoadingService) { }

    postOrder(order: Order) {
        this.http.post<OrderDetails>(this.baseUrl + 'order', { order },
         { headers: this.authService.getHeaders()
            .set('Content-Type', 'application/json'), observe: 'response'})
         .subscribe(
            data => {
            this.orderService.setOrderDetails(data.body);
            },
            error => {
                this.authService.handleError(error);
            });
    }
    getCartProduct() {
        this.http.get(this.baseUrl + 'data/cart', { headers: this.authService.getHeaders(),
        responseType: 'json', observe: 'response'})
        .subscribe(
            (data) => {
                this.cartService.setItems(data.body);
            },
            (error) => {
                this.authService.handleError(error);
            }
        );
    }

    getProductByCategory(cate: string) {
        this.loadingService.setLoading(false);
        this.http.get<Product[]>(this.baseUrl + 'product/category', { params: {
            'category': cate
        }, responseType: 'json', observe: 'response'})
        .subscribe(
            (data) => {
                this.shoppingService.setProducts(data.body);
                this.loadingService.setLoading(true);
            },
            (error) => {
                console.log(error);
                this.loadingService.setLoading(true);

            }
        );
    }

    getProductBySubCategory(cate: string, subCate: string) {
        this.loadingService.setLoading(false);
        this.http.get(this.baseUrl + 'product/category', { params: {
            'category': cate,
            'subCategory': subCate
        }, responseType: 'json', observe: 'response'})
        .subscribe(
            (data) => {
                this.shoppingService.setProducts(data.body);
                this.loadingService.setLoading(true);
            },
            (error) => {
                console.log(error);
                this.loadingService.setLoading(true);
            }
        );
    }

    getProductById(id: number) {
        this.loadingService.setLoading(false);
        this.http.get(this.baseUrl + 'product/id', { params: {
            'id': id.toString()
        }, responseType: 'json', observe: 'response' })
        .subscribe(
        (data) => {
            this.shoppingService.setProduct(data.body);
            this.loadingService.setLoading(true);
        },
        (error) => {
            console.log(error);
            this.loadingService.setLoading(true);
        });
    }

    addCartProduct(id: number, qty: number) {
        this.http.post<number>(this.baseUrl + 'cart', { }, { headers: this.authService.getHeaders(),
            params: {
             'productId': id.toString(),
             'qty': qty.toString()
            }, responseType: 'json', observe: 'response' })
            .subscribe(
                data => {
                    this.authService.addToCart(id, data.body);
                },
                error => console.log(error)
            );
    }

}
