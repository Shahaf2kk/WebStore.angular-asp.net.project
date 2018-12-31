import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading-progress/loading.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor (private loadingService: LoadingService ) { }

  ngOnInit() {
    this.loadingService.setLoading(true);
  }
}
