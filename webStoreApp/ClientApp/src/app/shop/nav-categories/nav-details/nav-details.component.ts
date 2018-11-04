import { Component, OnInit, Input } from '@angular/core';

import { ShopService } from '../../shop.service';
import { ProductList } from '../../shop.module';


@Component({
  selector: 'app-nav-details',
  templateUrl: './nav-details.component.html',
  styleUrls: ['./nav-details.component.css']
})
export class NavDetailsComponent implements OnInit {
  @Input() categorySelected: string;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
  }
  getSubCategoryNames() {
    return this.shopService.getSubCategoryNames(this.categorySelected);
  }
  // getReviewProduct(subCategory: string) {
  //   const subCategoryProduct: ProductList[]  = this.shopService.getProductBySubCategory(this.categorySelected, subCategory);
  //   return subCategoryProduct.slice(0, 3);
  // }

}
