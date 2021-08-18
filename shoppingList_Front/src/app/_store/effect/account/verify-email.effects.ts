//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import { verifyEmailSubmit } from '@app_account/verify-email/verify-email.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
//#endregion


@Injectable()
export class VerifyEmailEffects {

  verifyEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verifyEmailSubmit),
      exhaustMap((action) =>
        this.accountService.verifyEmail(action.token).pipe(
          /* TODO - NgRx
            error: () => { this.emailStatus = EmailStatusEnum.Failed; }
          */
          map(() => AccountAPIActions.verifyEmailSuccess({
            message: 'Verification successful, you can now login'
          })),
          catchError((error) => of(AccountAPIActions.verifyEmailFailure({ error: error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
