import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
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
export class ShoppingListComponent implements OnInit, DoCheck {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageSize = 30;
  length = 0;
  pageEvent: PageEvent;

  cate: string;
  subCate: string;
  search: string;
  hasResults = false;
  listOfProducts: Product[];

  defImage: string;

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private productsData: ProductsDataService,
              private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.defImage = this.shoppingService.defImage;
    this.search = '';
    this.pageEvent = new PageEvent;
    this.pageEvent.pageIndex = 0;
    this.paginator.firstPage();
    this.activateRoute.params
      .subscribe(
        (params: Params) => {
          this.cate = params['cate'];
          this.subCate = params['sub'];
          this.search = params['res'];
          this.callToProducts();
          this.setProducts();
        }
      );
  }
  ngDoCheck() {
    this.setProducts();
  }

  callToProducts() {
    this.shoppingService.restartProducts();
    if (this.search === 'e') {
      this.search = '';
      if (this.cate === null) {
        this.router.navigate(['/notfound']);
        return;
      }
      if (this.subCate === 'e') {
        this.productsData.getProductByCategory(this.cate);
      } else {
        this.productsData.getProductBySubCategory(this.cate, this.subCate);
      }
    } else {
      this.productsData.setLoading(true);
      const res = this.shoppingService.getProductsBySearchWord(this.search);
      if (res.length > 0 ) {
        this.hasResults = true;
        this.productsData.getProductsByProductsId(res);
      } else {
        this.hasResults = false;
        this.productsData.setLoading(false);
      }
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
    const data = this.shoppingService.getProducts();
    if (data !== undefined) {
      this.listOfProducts = data;
      this.pageEvent.length = this.listOfProducts.length;
      this.length = this.pageEvent.length;
    }
  }

}
