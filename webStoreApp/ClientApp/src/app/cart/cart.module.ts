import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
        CartComponent
    ],
    providers: [
        CartService
    ],
    imports: [
        CommonModule
    ]
})
export class CartModule { }
