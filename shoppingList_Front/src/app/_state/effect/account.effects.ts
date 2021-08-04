//#region Angular
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountPageActions from '@app_action/account-page.action';
import * as AccountAPIActions from '@app_action/account-api.action';
//#endregion

//#region App Component, Model
import { AccountService } from '@app_service_feat/account.service';
//#endregion


@Injectable()
export class AccountEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountPageActions.login),

      exhaustMap(action =>

        // Call the service
        this.accountService.login(action.email, action.pwd).pipe(
            map(account => AccountAPIActions.loginSuccess({ Account: account })),
            catchError((error) => of(AccountAPIActions.loginFailed(error)))
          )
      )
    )
  );



  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) {}
}
