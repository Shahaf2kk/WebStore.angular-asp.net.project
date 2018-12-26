import { Injectable } from '@angular/core';

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

import { OrderService } from './order.service';

@Injectable()
export class OrderGuard implements CanActivate {

    constructor(private orderService: OrderService,
                private route: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.orderService.checkIfHasProducts()) {
            this.route.navigate(['/cart']);
            return false;
        }
        return true;
    }

}
