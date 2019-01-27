import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { PageNotFoundRoutingModule } from './page-not-found/page-not-found-routing.module';

import { AppLoadService } from './app-load.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import { LoadingProgressComponent } from './loading-progress/loading-progress.component';
import { ShoppingService } from './shopping/shopping.service';
import { LoadingService } from './loading-progress/loading.service';

export function categoryNamesProviderFactory(appLoad: AppLoadService) {
return () => appLoad.getCategoriesNames();
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoadingProgressComponent
  ],
  imports: [
    NoopAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    CartModule,
    AuthModule,
    CoreModule,
    OrderModule,
    PageNotFoundRoutingModule
  ],
  providers: [
    LoadingService,
    ShoppingService,
    {
    provide: APP_INITIALIZER, useFactory: categoryNamesProviderFactory, deps: [AppLoadService], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
