import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as Rx from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    private lastUrl = new Rx.BehaviorSubject<string>('/');
    getLastUrl = this.lastUrl.asObservable();
    constructor(private authService: AuthService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Rx.Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.isAuth()) {
            console.log('false');
            this.lastUrl.next(state.url);
            this.router.navigate(['/signin']);
            return false;
        }
        console.log('true');
        return true;
    }

    setUrlReturn(url: string) {
        this.lastUrl.next(url);
    }
}
