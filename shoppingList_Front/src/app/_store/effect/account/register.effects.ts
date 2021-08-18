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

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSubmit),
      exhaustMap((action) =>
        this.accountService.register(action.account).pipe(
          map(() => AccountAPIActions.registerSuccess({
            message: 'Registration successful, please check your email for verification instructions'
          })),
          catchError((error) => of(AccountAPIActions.registerFailure({ error: error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
