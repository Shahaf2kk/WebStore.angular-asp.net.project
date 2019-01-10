import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ShoppingService } from '../shopping.service';

import { ImageArray } from '../../model/product.model';
import { ProductsDataService } from '../../shared/products-data.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})

export class PhotoGalleryComponent implements OnInit, OnChanges {

  @Input() inputImages: ImageArray[];
  hasOneImage: boolean;
  defImage: string;

  constructor(private shoppingService: ShoppingService,
              private productData: ProductsDataService ) { }

  ngOnInit() {
    this.defImage = this.productData.defImage;
    this.checkImageArray();
  }

  checkImageArray() {
    if (this.inputImages === undefined) {
      return;
    }
    if (this.inputImages.length === 1) {
      this.hasOneImage = true;
    } else {
      this.hasOneImage = false;
    }
  }

    imageMove(arr: {url: string, show: boolean}[], moveRight: boolean) {
      if (!moveRight) {
        arr.push(arr.shift());
        return;
      }
      arr.unshift(arr.pop());
    }

    next() {
      this.imageMove(this.inputImages, false);
    }

    back() {
      this.imageMove(this.inputImages, true);
    }
    ngOnChanges() {
      this.checkImageArray();
    }
}
