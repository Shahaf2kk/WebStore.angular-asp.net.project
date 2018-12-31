import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order.component';

@NgModule({
    declarations: [
        ShipDetailsComponent,
        OrderDetailsComponent,
        OrderComponent
    ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ],
    providers: []
})

export class OrderModule { }
