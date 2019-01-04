import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { OrderDetailsComponent, AfterPayDialog } from './order-details/order-details.component';
import { OrderComponent } from './order.component';

@NgModule({
    declarations: [
        ShipDetailsComponent,
        OrderDetailsComponent,
        OrderComponent,
        AfterPayDialog
    ],
    entryComponents: [
        AfterPayDialog
    ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        MatDialogModule
    ],
    providers: [
       { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ]
})

export class OrderModule { }
