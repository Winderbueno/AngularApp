//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import * as ComponentActions from '@app_account/reset-password/reset-password.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
//#endregion


@Injectable()
export class ResetPasswordEffects {

  /* Call resetPassword */
  resetPassword$ = createEffect(() => this.actions$.pipe(
    ofType(ComponentActions.resetPasswordSubmit),

    exhaustMap((action) =>
      this.accountService.resetPassword(action.token, action.password, action.confirmPassword)
        .pipe(
          /* TODO_NGRX
            next: () => {
              this.alertService.success(
                'Password successfully reinitialised, you can now log in :)',
                { keepAfterRouteChange: true });
              this.router.navigate(['../login'], { relativeTo: this.route });},
            error: error => { this.alertService.error(error); }
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
