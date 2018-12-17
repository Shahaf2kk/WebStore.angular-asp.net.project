import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  hasLoading = false;

  ngOnInit() {
    this.shoppingService.hasLoading
      .subscribe((data: boolean) => {
        this.hasLoading = data;
      });
  }

}
