import { Component, OnInit } from '@angular/core';
import { ProductList } from '../shop.module';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent implements OnInit {
  item: ProductList = null;
  id: number;
  hasProduct = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private shopItem: ShopService) {}

  ngOnInit() {
    // not obserable:
    // this.id = this.route.snapshot.params['i'];
    // this.getItemById();
    // obserable:
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['i'];
        this.getItemById();
      }
    );
  }
  getItemById() {
    const product = this.shopItem.getProductById(+this.id);
    if (product != null) {
      this.item = product;
      this.hasProduct = true;
    } else {
      this.router.navigate(['/notfound' , { m: this.id }]);
    }
  }
}
