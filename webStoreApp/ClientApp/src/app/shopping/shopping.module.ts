import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingComponent } from './shopping.component';
import { ShoppingCartBoxComponent } from './shopping-cart-box/shopping-cart-box.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingItemComponent,
        ShoppingComponent,
        ShoppingCartBoxComponent,
        PhotoGalleryComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ShoppingRoutingModule,
        SharedModule
    ]
})
export class ShoppingModule { }
