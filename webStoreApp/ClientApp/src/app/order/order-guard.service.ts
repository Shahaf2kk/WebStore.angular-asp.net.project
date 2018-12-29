import { Injectable } from '@angular/core';

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanLoad } from '@angular/router';

import { OrderService } from './order.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class OrderGuard implements CanActivate, CanLoad {

    constructor(private orderService: OrderService,
                private authService: AuthService,
                private route: Router) { }

    canLoad() {
        if (!this.authService.isAuth()) {
            this.route.navigate(['/signin']);
            return false;
        }
        return true;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.orderService.checkIfHasProducts()) {
            this.route.navigate(['/cart']);
            return false;
        }
        return true;
    }

}
