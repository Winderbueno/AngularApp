//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromAction from '../store/action/';
import * as fromComponent from '../component/';
//#endregion


@Injectable()
export class RouterEffects {

  routeToLogin$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        fromAction.forgotPasswordSuccessAction,
        fromAction.resetPasswordSuccessAction,
        fromAction.registerSuccessAction,
        fromComponent.emailTokenValidatedAction,
        fromAction.autoLogOutAction,
      ),
      tap(() => {
        this.router.navigate(['account/login']);
      })
    ),
    { dispatch: false }
  );


  /* If Login Succeed, this effect route to the page
   * the user attempted to access before login */
  routeToRequestedPageAfterLogin$ = createEffect(() =>

    this.actions$.pipe(
      ofType(fromAction.loginSuccessAction),
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
