import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavCategoriesComponent } from './shop/nav-categories/nav-categories.component';
import { ShoppingListComponent } from './shop/shopping-list/shopping-list.component';
import { UserNavComponent } from './core/header/user-nav/user-nav.component';
import { CartNavComponent } from './core/header/cart-nav/cart-nav.component';
import { SearchComponent } from './core/header/search/search.component';
import { ShoppingDetailsComponent } from './shop/shopping-details/shopping-details.component';
import { NavDetailsComponent } from './shop/nav-categories/nav-details/nav-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShopItemsComponent } from './shop/shopping-list/shop-items/shop-items.component';
import { ShopService } from './shop/shop.service';
import { ClickOutsideModule } from 'ng4-click-outside';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { ProductsDataService } from './shared/products-data.service';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { CartComponent } from './items/cart/cart.component';
import { ItemService } from './items/item.service';
import { AppLoadSErvice } from './app-load.service';
import { AuthGuard } from './auth/auth-guard.service';
// import { AuthGuardService } from './auth/auth-guard.service';

export function categoryNamesProviderFactory(appLoad: AppLoadSErvice) {
 return () => appLoad.getCategoriesNames();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavCategoriesComponent,
    ShoppingListComponent,
    UserNavComponent,
    CartNavComponent,
    SearchComponent,
    ShoppingDetailsComponent,
    NavDetailsComponent,
    ShopItemsComponent,
    ShopCategoryComponent,
    PageNotFoundComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ClickOutsideModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    ShopService,
    ProductsDataService,
    AuthService,
    ItemService,
    AppLoadSErvice,
    AuthGuard,
   // AuthGuardService
    {
     provide: APP_INITIALIZER, useFactory: categoryNamesProviderFactory, deps: [AppLoadSErvice], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
