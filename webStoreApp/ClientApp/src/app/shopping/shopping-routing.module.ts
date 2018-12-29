import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingComponent } from './shopping.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const shoppingRoutes: Routes = [
    { path: '', component: ShoppingComponent, children: [
        { path: 'i/:item', component: ShoppingItemComponent },
        { path: ':cate/:sub', component: ShoppingListComponent }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(shoppingRoutes)],
    exports: [RouterModule]
})

export class ShoppingRoutingModule { }
