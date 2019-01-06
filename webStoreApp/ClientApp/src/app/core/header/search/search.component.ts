import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShoppingService } from '../../../shopping/shopping.service';

import { ProductsName } from '../../../model/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchInput: string;
  productsName: ProductsName[];

  constructor(private shoppingService: ShoppingService,
              private route: Router) { }

  ngOnInit() {
    this.searchInput = '';
    this.productsName = this.shoppingService.getProductsNames().slice(0, 50);
  }

  onSearch() {
    if (this.searchInput !== '') {
      this.route.navigate(['/shopping', 'e', 'e', this.searchInput]);
      return;
    }
    this.searchInput = '';
  }

}
