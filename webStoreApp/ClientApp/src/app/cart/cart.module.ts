import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DesignModule } from '../design.module';
import { AppRoutingModule } from '../app-routing.module';

import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
    declarations: [
        CartComponent,
        CartItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        DesignModule
    ]
})
export class CartModule { }
