//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import { loginSubmit } from '@app_account/login/login.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
import { Account } from '@app_model/account.model';
//#endregion


@Injectable()
export class AccountEffects {

  /* Call login */
  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginSubmit),

    exhaustMap((action) =>
      this.accountService.login(action.email, action.password)
        .pipe(
          map((account: Account) => AccountAPIActions.loginSuccess({ account: account })),
          catchError((error) => of(AccountAPIActions.loginFailure({ error: error })))
        )
    )
  ));

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
