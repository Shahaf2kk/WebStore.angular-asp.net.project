import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderGuard } from './order-guard.service';

const orderRoutes: Routes = [
    { path: '', component: OrderComponent, children: [
        { path: '', component: ShipDetailsComponent, canActivate: [OrderGuard]},
        { path: 'orderDetails', component: OrderDetailsComponent, canActivate: [OrderGuard]}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(orderRoutes)],
    exports: [RouterModule]
})

export class OrderRoutingModule { }
