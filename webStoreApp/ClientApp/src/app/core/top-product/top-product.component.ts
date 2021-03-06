import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../../shopping/shopping.service';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css']
})

export class TopProductComponent implements OnInit {

  topProduct: Product[];
  cateNames: string[];

  defImage = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.cateNames = this.shoppingService.getCategoryName();
  }

  getProductByCate(cate: string): Product[] {
    return this.shoppingService.getTopProductsByCate(cate);
  }

}
