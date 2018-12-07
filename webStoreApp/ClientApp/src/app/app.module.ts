import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideModule } from 'ng4-click-outside';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingModule } from './shopping/shopping.module';
import { OrderModule } from './order/order.module';

import { ProductsDataService } from './shared/products-data.service';
import { AppLoadService } from './app-load.service';
import { ShopService } from './shop/shop.service';
import { ShoppingService } from './shopping/shopping.service';
import { AuthGuard } from './auth/auth-guard.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavCategoriesComponent } from './shop/nav-categories/nav-categories.component';
import { UserNavComponent } from './core/header/user-nav/user-nav.component';
import { CartNavComponent } from './core/header/cart-nav/cart-nav.component';
import { SearchComponent } from './core/header/search/search.component';
import { ShoppingDetailsComponent } from './shop/shopping-details/shopping-details.component';
import { NavDetailsComponent } from './shop/nav-categories/nav-details/nav-details.component';
import { ShopItemsComponent } from './shop/shopping-list/shop-items/shop-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { HomeComponent } from './core/home/home.component';
import { AuthService } from './auth/auth.service';

export function categoryNamesProviderFactory(appLoad: AppLoadService) {
 return () => appLoad.getCategoriesNames();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavCategoriesComponent,
    UserNavComponent,
    CartNavComponent,
    SearchComponent,
    ShoppingDetailsComponent,
    NavDetailsComponent,
    ShopItemsComponent,
    ShopCategoryComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ClickOutsideModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    CartModule,
    AuthModule,
    ShoppingModule,
    OrderModule
  ],
  providers: [
    ShopService,
    ProductsDataService,
    AuthService,
    AppLoadService,
    ShoppingService,
    AuthGuard,
    {
     provide: APP_INITIALIZER, useFactory: categoryNamesProviderFactory, deps: [AppLoadService], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
