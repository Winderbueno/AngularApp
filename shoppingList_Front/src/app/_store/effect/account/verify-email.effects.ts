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

  /* Call resetPassword */
  verifyEmail$ = createEffect(() => this.actions$.pipe(
    ofType(verifyEmailSubmit),

    exhaustMap((action) =>
      this.accountService.verifyEmail(action.token)
        .pipe(
          /* TODO - NgRx
            next:
              this.alertService.success('Verification successful, you can now login',{ keepAfterRouteChange: true });
              this.router.navigate(['../login'], { relativeTo: this.route });
            error: () => { this.emailStatus = EmailStatusEnum.Failed; }
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
