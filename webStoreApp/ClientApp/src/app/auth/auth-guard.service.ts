import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    private lastUrl = new BehaviorSubject<string>('/');
    getLastUrl = this.lastUrl.asObservable();
    constructor(private authService: AuthService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuth()) {
            return true;
        }
        this.lastUrl.next(state.url);
        this.router.navigate(['/signin']);
        return false;

    }
}
