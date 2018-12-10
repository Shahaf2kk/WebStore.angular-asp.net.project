import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart/cart.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping/shopping-item/shopping-item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShipDetailsComponent } from './order/ship-details/ship-details.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderComponent } from './order/order.component';
import { HomeShoppingComponent } from './shopping/home-shopping/home-shopping.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'shopping', pathMatch: 'full'},
    { path: 'shopping', component: ShoppingComponent, children: [
        { path: '', component: HomeShoppingComponent, pathMatch: 'full'},
        { path: 'i/:item', component: ShoppingItemComponent },
        { path: ':cate/:sub', component: ShoppingListComponent }
    ]},
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
    { path: 'order', component: OrderComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ShipDetailsComponent},
        { path: 'orderDetails', component: OrderDetailsComponent}
    ]},
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: 'notfound', pathMatch: 'full'},
    { path: 'notfound', component: PageNotFoundComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
