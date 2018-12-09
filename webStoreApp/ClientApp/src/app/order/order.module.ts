import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderService } from './order.service';

import { AppRoutingModule } from '../app-routing.module';

import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order.component';

@NgModule({
    declarations: [
        ShipDetailsComponent,
        OrderDetailsComponent,
        OrderComponent
    ],
    providers: [
        OrderService
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule
    ]
})

export class OrderModule { }
