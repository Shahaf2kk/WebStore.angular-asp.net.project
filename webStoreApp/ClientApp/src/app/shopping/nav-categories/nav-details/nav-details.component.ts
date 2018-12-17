import { Component, OnInit, Input } from '@angular/core';

import { ShoppingService } from '../../shopping.service';

@Component({
  selector: 'app-nav-details',
  templateUrl: './nav-details.component.html',
  styleUrls: ['./nav-details.component.css']
})
export class NavDetailsComponent implements OnInit {
  @Input() categorySelected: string;
  subCate: string[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subCate = this.shoppingService.getSubCategory(this.categorySelected);
  }

  // getSubCategoryNames() {
  // }

}
