import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ShoppingService } from 'src/app/shopping/shopping.service';
import { ProductsName } from 'src/app/model/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  faSearch = faSearch;
  searchInput: string;
  productsName: ProductsName[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.productsName = this.shoppingService.getProductsNames().slice(0, 50);
  }

}
