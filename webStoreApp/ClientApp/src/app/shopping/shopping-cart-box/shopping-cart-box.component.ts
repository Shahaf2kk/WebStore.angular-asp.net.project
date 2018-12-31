import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

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
  qty = 1;
  qtyInCart = 0;
  wasBuy = false;

  constructor(private authService: AuthService,
              private router: Router,
              private productData: ProductsDataService,
              private authGuard: AuthGuard,
              private snackBar: MatSnackBar) { }

  ngOnInit() { }

  openSnackBar() {
    this.snackBar.open('You Are Add ' + this.qty + ' To The Cart!!', 'Ok', {
      duration: 3000,
    });
  }

  addToCart() {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/signin']);
      this.authGuard.setUrlReturn('/shopping/i/' + this.product.id.toString());
      return;
    } else {
      if (this.qty < 1) {
        this.qty = 1;
        return;
      }
      this.productData.addCartProduct(this.product.id, this.qty);
      this.openSnackBar();
      this.wasBuy = true;
      setTimeout(() => {
        this.wasBuy = false;
      }, 2500);
    }
  }
}
