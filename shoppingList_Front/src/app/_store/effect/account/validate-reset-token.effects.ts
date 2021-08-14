//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import { validateResetToken } from '@app_account/reset-password/reset-password.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
//#endregion


@Injectable()
export class ValidateResetTokenEffects {

  /* Call resetPassword */
  validateResetToken$ = createEffect(() => this.actions$.pipe(
    ofType(validateResetToken),

    exhaustMap((action) =>
      this.accountService.validateResetToken(action.token)
        .pipe(
          /* TODO - NgRx
            next:
              this.token = token;
              this.tokenStatus = TokenStatusEnum.Valid;
            error: () => { this.tokenStatus = TokenStatusEnum.Invalid;
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
