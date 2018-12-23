import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsDataService } from '../../shared/products-data.service';
import { ShoppingService } from '../shopping.service';
import { Product } from '../../model/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageSize = 30;
  length = 0;
  pageEvent: PageEvent;

  cate: string;
  subCate: string;
  listOfProducts: Product[];

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private productsData: ProductsDataService,
              private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.pageEvent = new PageEvent;
    this.pageEvent.pageIndex = 0;
    this.activateRoute.params
      .subscribe(
        (params: Params) => {
          this.cate = params['cate'];
          this.subCate = params['sub'];
          this.callToProducts();
          this.setProducts();
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

  sliceFrom(pageEvent) {
    if (pageEvent.pageIndex === 0) {
      return pageEvent.pageIndex;
    } else {
      return pageEvent.pageIndex * this.pageSize;
    }
  }

  sliceTo(pageEvent) {
    return this.sliceFrom(pageEvent) + this.pageSize;
  }

  setProducts() {
    this.paginator.firstPage();
    const data = this.shoppingService.getProducts();
    if (data === undefined) {
      setTimeout(() => {
        this.setProducts();
      }, 200);
    } else {
      this.listOfProducts = data;
      this.pageEvent.length = this.listOfProducts.length;
      this.length = this.pageEvent.length;
    }
  }
  getProducts() {
    return this.listOfProducts;
  }

}
