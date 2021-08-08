//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AccountComponentsActionTypes } from '@app_action/component/account.component.action';
import { LoginSuccess, LoginFailure }  from '@app_action/api/account.api.action';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
//#endregion


@Injectable()
export class AccountEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountComponentsActionTypes.LOGIN_SUBMIT),

      exhaustMap(action =>

        // Call the service
        this.accountService.login("mail", "pwd").pipe(
            map(account => new LoginSuccess({ account: account })),
            //catchError((error => of(LoginFailure({ error: error })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) {}
}
