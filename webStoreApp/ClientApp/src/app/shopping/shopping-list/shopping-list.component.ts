import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsDataService } from '../../shared/products-data.service';
import { ShoppingService } from '../shopping.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  cate: string;
  subCate: string;

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private productsData: ProductsDataService,
              private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(
        (params) => {
          this.cate = params['cate'];
          this.subCate = params['sub'];
          this.callToProducts();
        }
      );
  }

  callToProducts() {
    console.log('cate ' + this.cate);
    console.log('subCate ' + this.subCate);
    if (this.cate === null) {
      this.router.navigate(['/notfound']);
    }
    if (this.subCate === 'e') {
      this.productsData.getProductByCategory(this.cate);
    } else {
      this.productsData.getProductBySubCategory(this.cate, this.subCate);
    }
  }

  getProduct(): Product[] {
    return this.shoppingService.getProducts();
  }

}
