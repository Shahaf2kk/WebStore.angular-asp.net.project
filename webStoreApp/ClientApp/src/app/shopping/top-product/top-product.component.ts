import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css']
})
export class TopProductComponent implements OnInit {

  topProduct: Product[];
  cateNames: string[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.cateNames = this.shoppingService.getCategoryName();
  }

  getProductByCate(cate: string): Product[] {
    return this.shoppingService.getTopProductsByCate(cate);
  }

}
