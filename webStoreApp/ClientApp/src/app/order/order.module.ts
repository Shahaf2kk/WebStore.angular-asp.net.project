import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from '../app-routing.module';
import { DesignModule } from '../design.module';

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
        ReactiveFormsModule,
        FormsModule,
        DesignModule,
        AppRoutingModule
    ]
})

export class OrderModule { }
