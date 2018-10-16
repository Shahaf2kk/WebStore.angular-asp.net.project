import { Component, OnInit } from '@angular/core';
import { ProductList } from '../shop.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listOfElectronics: ProductList[];
  listOfFashion: ProductList[];
  listOfMotors: ProductList[];

  constructor() {}

  ngOnInit() {
  }
}
