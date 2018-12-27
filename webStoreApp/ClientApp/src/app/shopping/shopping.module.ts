import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { DesignModule } from '../design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingComponent } from './shopping.component';
import { ShoppingCartBoxComponent } from './shopping-cart-box/shopping-cart-box.component';
import { NavCategoriesComponent } from './nav-categories/nav-categories.component';
import { NavDetailsComponent } from './nav-categories/nav-details/nav-details.component';
import { NavBarUrlComponent } from './nav-bar-url/nav-bar-url.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { TopProductComponent } from './top-product/top-product.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingItemComponent,
        ShoppingComponent,
        ShoppingCartBoxComponent,
        NavCategoriesComponent,
        NavDetailsComponent,
        NavBarUrlComponent,
        PhotoGalleryComponent,
        TopProductComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AppRoutingModule,
        DesignModule
    ]
})
export class ShoppingModule { }
