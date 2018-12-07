import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingDetailsComponent } from './shop/shopping-details/shopping-details.component';
import { ShopItemsComponent } from './shop/shopping-list/shop-items/shop-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart/cart.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping/shopping-item/shopping-item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShipDetailsComponent } from './order/ship-details/ship-details.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'shopping', component: ShoppingComponent, children: [
        { path: 'i/:item', component: ShoppingItemComponent },
        { path: ':cate/:sub', component: ShoppingListComponent }
    ]},
    { path: 'shop', component: HomeComponent, children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: ShopItemsComponent},
        { path: ':i', component: ShoppingDetailsComponent},
        { path: 'category/:cate', component: ShopCategoryComponent}
    ]},
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
    { path: 'order', component: ShipDetailsComponent, canActivate: [AuthGuard], children: [
        { path: 'orderDetails', component: OrderDetailsComponent, canActivate: [AuthGuard]}
    ]},
    // { path: 'user', loadChildren: './'}
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: 'notfound', pathMatch: 'full'},
    { path: 'notfound', component: PageNotFoundComponent, children: [
        { path: ':m', component: PageNotFoundComponent}
    ] }
  ];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
