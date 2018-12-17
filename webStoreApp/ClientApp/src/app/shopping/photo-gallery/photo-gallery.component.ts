import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit, OnChanges {

  @Input() inputImages: string;
  images: string[];
  hasOneImage: boolean;

  constructor() { }

  ngOnInit() {
    this.convertStringToArray(this.inputImages);
  }


  convertStringToArray(array: string) {
    if (array === undefined || array === null) {
      return;
    }
      const el = array.split(',');
      for (let i = 0; i < el.length; i++) {
        const ele = el[i].split(' ');
        if (ele[0] === '') {
          el[i] = ele[1];
        }
      }
      this.images = el;
      if (this.images.length === 1) {
        this.hasOneImage = true;
      }
    }

    imageMove(arr: string[], moveRight: boolean) {
      if (!moveRight) {
        arr.push(arr.shift());
        return;
      }
      arr.unshift(arr.pop());
    }

    next() {
      this.imageMove(this.images, false);
    }

    back() {
      this.imageMove(this.images, true);
    }
    ngOnChanges() {
      this.convertStringToArray(this.inputImages);
    }
}
