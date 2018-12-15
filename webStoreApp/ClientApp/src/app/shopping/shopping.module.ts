import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { DesignModule } from '../design.module';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingComponent } from './shopping.component';
import { ShoppingCartBoxComponent } from './shopping-cart-box/shopping-cart-box.component';
import { NavCategoriesComponent } from './nav-categories/nav-categories.component';
import { NavDetailsComponent } from './nav-categories/nav-details/nav-details.component';
import { HomeShoppingComponent } from './home-shopping/home-shopping.component';
import { NavBarUrlComponent } from './nav-bar-url/nav-bar-url.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingItemComponent,
        ShoppingComponent,
        ShoppingCartBoxComponent,
        NavCategoriesComponent,
        NavDetailsComponent,
        HomeShoppingComponent,
        NavBarUrlComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        DesignModule
    ]
})
export class ShoppingModule { }
