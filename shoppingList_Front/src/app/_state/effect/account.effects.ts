//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AccountPagesActionTypes } from '@app/_state/action/page/account-page.action';
import { AccountPagesActions }  from '@app/_state/action/page/account-page.action';
import * as AccountAPIActions from '@app/_state/action/api/account.api.action';
//#endregion

//#region App Component, Model
import { AccountService } from '@app_service_feat/account.service';
//#endregion


@Injectable()
export class AccountEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountPagesActionTypes.LOGIN),

      exhaustMap(action =>

        // Call the service
        this.accountService.login(action.payload, action.pwd).pipe(
            map(account => AccountAPIActions.loginSuccess({ Account: account })),
            catchError((error) => of(AccountAPIActions.loginFailed(error)))
          )
      )
    )
  );

  constructor(
    private actions$: AccountPagesActions,
    private accountService: AccountService
  ) {}
}
