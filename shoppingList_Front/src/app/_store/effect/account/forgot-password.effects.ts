//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import { forgotPasswordSubmit } from '@app_account/forgot-password/forgot-password.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
//#endregion


@Injectable()
export class ForgotPasswordEffects {

  /* Call forgotPassword */
  forgotPassword$ = createEffect(() => this.actions$.pipe(
    ofType(forgotPasswordSubmit),

    exhaustMap((action) =>
      this.accountService.forgotPassword(action.email)
        .pipe(
          /* TODO_NGRX
            next: () => this.alertService.success('Please check your email for password reset instructions'),
            error: error => this.alertService.error(error)
          */
          map(() => AccountAPIActions.genericSuccess()),
          catchError((error) => of(AccountAPIActions.loginFailure({ error: error })))
        )
    )
  ));

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
