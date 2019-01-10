import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CartItem } from '../../model/cart-item.model';
import { OrderDetails } from '../../model/order.model';
import { OrderService } from '../order.service';
import { ProductsDataService } from '../../shared/products-data.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit {

  orderDetails: OrderDetails;
  orderProduct: CartItem[];
  defImage: string;
  constructor(private orderService: OrderService,
              private productsData: ProductsDataService,
              private router: Router,
              public dialogRef: MatDialog) { }

  ngOnInit() {
    this.defImage = this.productsData.defImage;
    if (!this.orderService.checkIfHasProducts()) {
      this.router.navigate(['/cart']);
    }
    this.orderDetails = this.orderService.getOrderDetails();
  }

  setOrder() {
    this.orderService.payOrder();
    const dialog = this.dialogRef.open(AfterPayDialog);
    dialog.afterClosed().subscribe(res => { this.router.navigate(['']); } );
  }

  cancelOrder() {
    this.router.navigate(['/cart']);
  }

}

@Component({
  selector: 'app-after-pay',
  templateUrl: './after-pay-dialog.html',
  styleUrls: ['./after-pay-dialog.css']
})

export class AfterPayDialog { }
