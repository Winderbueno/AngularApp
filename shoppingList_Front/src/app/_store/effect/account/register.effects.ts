//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import { registerSubmit } from '@app_account/register/register.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
//#endregion


@Injectable()
export class RegisterEffects {

  /* Call register */
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerSubmit),

    exhaustMap((action) =>
      this.accountService.register(action.account)
        .pipe(
          /* TODO_NGRX
            next: () => {
              this.alertService.success(
                'Registration successful, please check your email for verification instructions',
                { keepAfterRouteChange: true });
              this.router.navigate(['../login'], { relativeTo: this.route });},
            error: error => { this.alertService.error(error); }
          */
          map(() => AccountAPIActions.registerSuccess()),
          catchError((error) => of(AccountAPIActions.registerFailure({ error: error })))
        )
    )
  ));

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
