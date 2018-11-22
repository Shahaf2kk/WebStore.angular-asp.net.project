import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ShoppingModule { }
