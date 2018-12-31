import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ImagePipe } from '../shared/image.pipe';

import { ProductsDataService } from '../shared/products-data.service';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../cart/cart.service';
import { AppLoadService } from '../app-load.service';

import { HomeComponent } from './home/home.component';
import { TopProductComponent } from './top-product/top-product.component';
import { CartNavComponent } from './header/cart-nav/cart-nav.component';
import { SearchComponent } from './header/search/search.component';
import { UserNavComponent } from './header/user-nav/user-nav.component';
import { HeaderComponent } from './header/header.component';
import { SearchPipePipe } from './header/search/search-pipe.pipe';
import { NavCategoriesComponent } from './header/nav-categories/nav-categories.component';
import { NavDetailsComponent } from './header/nav-categories/nav-details/nav-details.component';
import { OrderService } from '../order/order.service';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        TopProductComponent,
        CartNavComponent,
        SearchComponent,
        UserNavComponent,
        SearchPipePipe,
        NavCategoriesComponent,
        NavDetailsComponent
     ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        SharedModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ProductsDataService,
        CartService,
        OrderService,
        AuthService,
        AppLoadService,
    ]
})

export class CoreModule { }
