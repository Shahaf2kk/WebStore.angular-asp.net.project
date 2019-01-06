import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})

export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    if (!this.orderService.checkIfHasProducts()) {
      this.router.navigate(['/cart']);
    }
  }

}
