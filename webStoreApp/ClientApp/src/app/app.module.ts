import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ClickOutsideModule } from 'ng4-click-outside';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingModule } from './shopping/shopping.module';
import { OrderModule } from './order/order.module';

import { ProductsDataService } from './shared/products-data.service';
import { AppLoadService } from './app-load.service';
import { ShoppingService } from './shopping/shopping.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { CartNavComponent } from './core/header/cart-nav/cart-nav.component';
import { SearchComponent } from './core/header/search/search.component';
import { UserNavComponent } from './core/header/user-nav/user-nav.component';

export function categoryNamesProviderFactory(appLoad: AppLoadService) {
 return () => appLoad.getCategoriesNames();
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    CartNavComponent,
    SearchComponent,
    UserNavComponent,


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
    CoreModule,
    OrderModule
  ],
  providers: [
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
