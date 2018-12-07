import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    if (!this.orderService.checkIfHasProducts()) {
      this.router.navigate(['/cart']);
    }
  }

}
