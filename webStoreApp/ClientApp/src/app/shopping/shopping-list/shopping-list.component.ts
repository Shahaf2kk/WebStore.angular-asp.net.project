import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
        (params: Params) => {
          this.cate = params['cate'];
          this.subCate = params['sub'];
          this.callToProducts();
          this.shoppingService.setCategorySelectedSubject(this.cate, this.subCate);
        }
      );
  }

  callToProducts() {
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
    const el = this.shoppingService.getProducts();
    return el;
  }

}
