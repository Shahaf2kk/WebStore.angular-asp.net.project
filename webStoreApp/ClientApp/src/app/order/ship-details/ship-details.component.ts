import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderService } from '../order.service';
import { ProductsDataService } from '../../shared/products-data.service';

import { ShipDetails } from '../../model/ship-details.model';

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
  }

  onSubmit() {
    if (this.shippingForm.invalid) {
      return;
    }

    const shipDetails = new ShipDetails();
    shipDetails.shipAddress = this.shippingForm.value['address'];
    shipDetails.shipCity = this.shippingForm.value['city'];
    shipDetails.shipCountry = this.shippingForm.value['country'];
    shipDetails.phone = this.shippingForm.value['phone'];
    this.dataService.postOrder(this.orderService.setOrderShipping(shipDetails));
    this.shippingForm.reset();
  }

  back() {
    this.router.navigate(['/cart']);
  }

}
