import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderService } from '../order.service';
import { ProductsDataService } from 'src/app/shared/products-data.service';

import { ShipDetails } from 'src/app/model/ship-details.model';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.css']
})
export class ShipDetailsComponent implements OnInit {

  shippingForm: FormGroup;
  countries = ['asdf', 'casdfity', 'dsr', 'asdfg'];
  constructor(private orderService: OrderService,
              private dataService: ProductsDataService,
              private router: Router) { }


  ngOnInit() {
    this.shippingForm = new FormGroup({
      'address': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'city': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'country': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [ Validators.required, Validators.minLength(8)])
    });

    if (!this.orderService.checkIfHasProducts()) {
      this.router.navigate(['/cart']);
    }
  }

  onSubmit() {
    const shipDetails = new ShipDetails();
    shipDetails.shipAddress = this.shippingForm.value['address'];
    shipDetails.shipCity = this.shippingForm.value['city'];
    shipDetails.shipCountry = this.shippingForm.value['country'];
    shipDetails.phone = this.shippingForm.value['phone'];
    this.dataService.postOrder(this.orderService.setOrderShipping(shipDetails));
    this.router.navigate(['order/orderDetails']);
  }

}
