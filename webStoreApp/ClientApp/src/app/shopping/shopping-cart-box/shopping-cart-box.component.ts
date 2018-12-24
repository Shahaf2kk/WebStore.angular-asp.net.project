import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { AuthGuard } from '../../auth/auth-guard.service';
import { AuthService } from '../../auth/auth.service';
import { ProductsDataService } from '../../shared/products-data.service';

import { Product } from '../../model/product.model';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-shopping-cart-box',
  templateUrl: './shopping-cart-box.component.html',
  styleUrls: ['./shopping-cart-box.component.css']
})
export class ShoppingCartBoxComponent implements OnInit, OnChanges {


  @Input() product: Product;
  qty = 1;
  qtyInCart = 0;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  hasProducts = false;
  user = new User();

  constructor(private authService: AuthService,
              private router: Router,
              private productData: ProductsDataService,
              private authGuard: AuthGuard,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.authService.userDetails
        .subscribe((userData: {User: User, isAuth: boolean}) => {
          this.user = userData.User;
          this.checkQtyCart();
        });
  }

  ngOnChanges() {
    this.checkQtyCart();
  }

  openSnackBar() {
    this.snackBar.open('asdfghj', 'Ok', {
      duration: 2000,
    });
  }
  checkQtyCart() {
    if (this.user.listOfCart !== undefined) {
      for (let i = 0; i < this.user.listOfCart.length; i++) {
        const el = this.user.listOfCart[i];
        if (el.productDetails.id === this.product.id) {
          this.qtyInCart = el.qty;
          this.hasProducts = true;
        }
      }
    }
    console.log(this.qtyInCart);
  }

  addToCart() {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/signin']);
      this.authGuard.setUrlReturn('/shopping/i/' + this.product.id.toString());
      return;
    } else {
      this.productData.addCartProduct(this.product.id, this.qty);
      this.openSnackBar();
    }
  }
}
