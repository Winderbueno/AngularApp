//#region Angular & Material
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
//#endregion

//#region App Action
import * as AccountAPIActions from '@app_action/api/account.api.actions';
//#endregion


@Injectable()
export class RouterEffects {

  routeToLogin$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        AccountAPIActions.forgotPasswordSuccess,
        AccountAPIActions.resetPasswordSuccess,
        AccountAPIActions.registerSuccess,
        AccountAPIActions.verifyEmailSuccess),
      tap(() => {
        this.router.navigate(['account/login']);
      })
    ),
    { dispatch: false }
  );

  /* If Login Succeed, this effect route to the page
   * the user attempted to access before login */
  routeToRequestedPage$ = createEffect(

    () => this.actions$.pipe(
      ofType(AccountAPIActions.loginSuccess),
      tap(() => {
        // TODO - Get router param from store with selector
        // Get return url from route parameters or default to '/'
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        this.router.navigate([returnUrl]);

      })
    ),
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }
}
