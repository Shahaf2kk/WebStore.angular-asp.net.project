import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { OrderGuard } from './order/order-guard.service';

import { CartComponent } from './cart/cart/cart.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
    { path: 'shopping', loadChildren: './shopping/shopping.module#ShoppingModule'},
    { path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [OrderGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard,
        OrderGuard
    ]
})
export class AppRoutingModule { }
