import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from '../../auth/auth-guard.service';
import { AuthService } from '../../auth/auth.service';
import { ProductsDataService } from '../../shared/products-data.service';

import { Product } from '../../model/product.model';


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
              private productData: ProductsDataService,
              private authGuard: AuthGuard ) { }

  ngOnInit() { }

  addToCart(qty: number) {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/signin']);
      this.authGuard.setUrlReturn('/shopping/i/' + this.product.id.toString());
      return;
    } else {
      this.productData.addCartProduct(this.product.id, qty);
    }
  }
}
