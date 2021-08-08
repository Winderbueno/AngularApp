//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AccountPagesActionTypes } from '@app_action/page/account.page.action';
import { AccountAPIActions }  from '@app_action/api/account.api.action';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
//#endregion


@Injectable()
export class AccountEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountPagesActionTypes.LOGIN),

      exhaustMap(action =>

        // Call the service
        this.accountService.login("mail", "pwd").pipe(
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
