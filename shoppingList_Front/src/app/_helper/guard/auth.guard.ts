//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region App Model, Action, Selector
import * as AccountSelector from '@account/store/account.selectors';
//#endregion


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  isLogged: boolean = false;

    constructor(
        private router: Router,
        private store: Store
    ) {
      this.store.select(AccountSelector.isLogged).subscribe(value => this.isLogged=value);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // If account is logged in -> return true
        if (this.isLogged) return true;

        // If account not logged in -> redirect to login page with the return url
        // TODO - Change access to the router state
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
