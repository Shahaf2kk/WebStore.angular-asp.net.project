import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingComponent } from './shopping.component';
import { ShoppingCartBoxComponent } from './shopping-cart-box/shopping-cart-box.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingItemComponent,
        ShoppingComponent,
        ShoppingCartBoxComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule
    ]
})
export class ShoppingModule { }
