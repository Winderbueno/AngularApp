//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
//#endregion

//#region Store
import * as fromAccount from '@account/store/';
import * as fromStore from '../store/';
//#endregion


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  isLogged = false;

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.store.select(fromAccount.isLogged).subscribe(value => this.isLogged = value);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // If account is logged in -> return true
    if (this.isLogged) {
      return this.checkStore().pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
    }

    // If account not logged in -> redirect to login page with the return url
    // TODO - Change access to the router state
    this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.isActiveLoaded).pipe(
      tap(loaded => {
        if (!loaded) { this.store.dispatch(fromStore.loadActiveAction()); }
      }),
      take(1)
    );
  }
}
