//#region Angular & Material
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import * as RouterStore from '@ngrx/router-store';
import { AlertTypeEnum } from '../../_module/alert/model/enum/alert-type.enum';
import { Router, ActivatedRoute } from '@angular/router';

//#endregion

//#region App Service
//#endregion


@Injectable()
export class RouterEffects {

  /* Call login */
  changeRoute$ = createEffect(

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

  routeToLogin$ = createEffect(() =>

    this.actions$.pipe(
      ofType(
        AccountAPIActions.resetPasswordSuccess,
        AccountAPIActions.registerSuccess,
        AccountAPIActions.verifyEmailSuccess),
      tap(() => {
        // TODO - Get route param from store with selector
        this.router.navigate(['../login'], { relativeTo: this.route });
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }
}
