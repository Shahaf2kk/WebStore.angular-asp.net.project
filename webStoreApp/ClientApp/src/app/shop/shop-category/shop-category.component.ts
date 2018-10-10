import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ProductList } from '../shop.module';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {
  categoryTitle: string;
  productsCategory: ProductList[];
  hasProduct = false;
  constructor(private shopService: ShopService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.categoryTitle = this.route.snapshot.params['cate'];
    this.getCategoryProduct();
    this.route.params.subscribe(
      (params: Params) => {
        this.categoryTitle = params['cate'];
        this.getCategoryProduct();
      }
    );
  }
  getCategoryProduct() {
    const products = this.shopService.getProductByCategory(this.categoryTitle);
    if (products != null) {
      this.productsCategory = products;
      this.hasProduct = true;
    } else {
      this.router.navigate(['/notfound' , { m: this.categoryTitle }]);
    }
  }

}
