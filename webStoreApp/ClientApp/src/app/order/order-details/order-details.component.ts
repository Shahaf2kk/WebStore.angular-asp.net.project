import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../order.service';

import { OrderDetails } from 'src/app/model/order.model';
import { Product } from 'src/app/model/product.model';
import { CartItem } from 'src/app/model/cart-item.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: OrderDetails;
  orderProduct: CartItem[];
  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    if (!this.orderService.checkIfHasProducts()) {
      this.router.navigate(['/cart']);
    }
    this.orderDetails = this.orderService.getOrderDetails();
  }

  setOrder() {
    this.orderService.payOrder();
    alert('ur order was pay!');
    this.router.navigate(['']);
  }
  cancelOrder() {
    this.router.navigate(['/cart']);
  }

}
