import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { ProductsDataService } from '../shared/products-data.service';

@Injectable()
export class ItemService {

  // items: Item[] = []; // = new Item()[''];

    constructor(private productData: ProductsDataService) {
    }

    getProduct() {
        this.productData.getCartProduct()
        .subscribe(
            data => {
                console.log(data.body);
            },
            error => {
                console.log(error);
            }
        );
    }
}
