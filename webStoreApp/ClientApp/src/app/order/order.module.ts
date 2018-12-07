import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderService } from './order.service';

import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
    declarations: [
        ShipDetailsComponent,
        OrderDetailsComponent
    ],
    providers: [
        OrderService
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ]
})

export class OrderModule { }
