//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromRouter from '@router/router.selectors';
//#endregion

//#region This
import * as fromAPI from '../service/account.api.actions';
import * as fromComponent from '../component';
import * as fromStore from '../store';
//#endregion


@Injectable()
export class RouterEffects {

  routeToLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromAPI.forgotPasswordSuccessAction,
        fromAPI.resetPasswordSuccessAction,
        fromAPI.registerSuccessAction,
        fromAPI.logoutSuccessAction,
        fromAPI.logoutFailureAction,
        fromComponent.emailTokenValidatedAction,
        fromStore.autoLogoutAction,
        fromStore.logoutAction
      ),
      tap(() => {
        this.router.navigate(['account/login']);
      })
    ), { dispatch: false }
  );


  /* If Login Succeed, this effect route to the page
   * the user attempted to access before login */
  routeToRequestedPageAfterLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAPI.loginSuccessAction),
      tap(() => {
        // TODO - Get router param from store with selector
        // Get return url from route parameters or default to '/'
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'shop';
        this.router.navigate([returnUrl]);
      })
    ), { dispatch: false }
  );

  routeToShoppingListAtAutoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAPI.refreshTokenSuccessAction),
      withLatestFrom(this.store.select(fromRouter.selectUrl)),
      tap(([, currentUrl]) => {
        if(currentUrl && currentUrl.includes('account')){
          this.router.navigate(['/shop']);
        }
      })
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }
}
