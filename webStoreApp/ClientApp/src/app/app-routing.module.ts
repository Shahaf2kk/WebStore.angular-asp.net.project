import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingDetailsComponent } from './shop/shopping-details/shopping-details.component';
import { ShopItemsComponent } from './shop/shopping-list/shop-items/shop-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './items/cart/cart.component';
import { AuthGuard } from './auth/auth-guard.service';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'shop', component: HomeComponent, children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: ShopItemsComponent},
        { path: ':i', component: ShoppingDetailsComponent},
        { path: 'category/:cate', component: ShopCategoryComponent}
    ]},
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
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
