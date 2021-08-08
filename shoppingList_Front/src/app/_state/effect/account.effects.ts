//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.action';
import * as AccountComponentActions from '@app_action/component/account.component.action';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
import { Account } from '@app_model/account.model';
//#endregion


@Injectable()
export class AccountEffects {

  // Load user's active shoppingList from server
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AccountComponentActions.loginSubmit),

    exhaustMap((action) =>
      this.accountService.login(action.email, action.password)
        .pipe(
          map((account: Account) => AccountAPIActions.loginSuccess({ account: account })),
          catchError((error) => of(AccountAPIActions.loginFailure({ error: error })))
        )
    )
  )
  );

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
