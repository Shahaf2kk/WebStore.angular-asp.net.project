import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';
import { ProductsDataService } from 'src/app/shared/products-data.service';

import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-shopping-cart-box',
  templateUrl: './shopping-cart-box.component.html',
  styleUrls: ['./shopping-cart-box.component.css']
})
export class ShoppingCartBoxComponent implements OnInit {


  @Input() product: Product;
  qty: number;
  constructor(private authService: AuthService,
              private router: Router,
              private productData: ProductsDataService ) { }

  ngOnInit() {
  }

  addToCart(qty: number) {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/signin']);
      return;
    } else {
      this.productData.addCartProduct(this.product.id, qty);
    }
  }
}
