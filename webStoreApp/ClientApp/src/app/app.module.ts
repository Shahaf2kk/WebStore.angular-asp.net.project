import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavCategoriesComponent } from './shop/nav-categories/nav-categories.component';
import { ShoppingListComponent } from './shop/shopping-list/shopping-list.component';
import { UserNavComponent } from './header/user-nav/user-nav.component';
import { CartNavComponent } from './header/cart-nav/cart-nav.component';
import { SearchComponent } from './header/search/search.component';
import { ShoppingDetailsComponent } from './shop/shopping-details/shopping-details.component';
import { ShopComponent } from './shop/shop.component';
import { NavDetailsComponent } from './shop/nav-categories/nav-details/nav-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShopItemsComponent } from './shop/shopping-list/shop-items/shop-items.component';
import { ShopService } from './shop/shop.service';
import { ClickOutsideModule } from 'ng4-click-outside';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { ServerService } from './shared/data-share.service';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
// import { AuthGuardService } from './auth/auth-guard.service';

// export function productsProviderFactory(serverService: ServerService) {
//  return () => serverService.loadCategoriesNames();
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavCategoriesComponent,
    ShoppingListComponent,
    UserNavComponent,
    CartNavComponent,
    SearchComponent,
    ShopComponent,
    ShoppingDetailsComponent,
    NavDetailsComponent,
    ShopItemsComponent,
    ShopCategoryComponent,
    PageNotFoundComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
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
    ServerService,
    AuthService
   // AuthGuardService
    // {
    //  provide: APP_INITIALIZER, useFactory: productsProviderFactory, deps: [ServerService], multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
