import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-nav-bar-url',
  templateUrl: './nav-bar-url.component.html',
  styleUrls: ['./nav-bar-url.component.css']
})
export class NavBarUrlComponent implements OnInit, OnDestroy {

  category = '';
  subCategory = '';
  hasCate: boolean;
  subscription: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.hasCate = true;
    this.subscription = this.shoppingService.categoriesSelectedSubject
      .subscribe( (data: {cate: string, sub: string}) => {
        const cate = data.cate;
        const sub = data.sub;
          this.category = cate;
          this.subCategory = sub;
        });
    }
    ngOnDestroy() {
      this.hasCate = false;
      this.subscription.unsubscribe();
    }


}
