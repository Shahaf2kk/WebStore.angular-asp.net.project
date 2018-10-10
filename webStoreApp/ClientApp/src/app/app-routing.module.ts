import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ShoppingDetailsComponent } from './shop/shopping-details/shopping-details.component';
import { ShopItemsComponent } from './shop/shopping-list/shop-items/shop-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';


// import { ShoppingListComponent } from './shop/shopping-list/shopping-list.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/shop/list', pathMatch: 'full' },
    { path: 'shop', component: ShopComponent, children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: ShopItemsComponent},
        { path: ':i', component: ShoppingDetailsComponent},
        { path: 'category/:cate', component: ShopCategoryComponent}
    ]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
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
