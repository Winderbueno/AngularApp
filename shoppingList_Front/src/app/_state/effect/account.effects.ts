/* //#region Angular & Material
import { Injectable } from '@angular/core';
import { map, exhaustMap, catchError } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AccountComponentsActionTypes } from '@app_action/component/account.component.action';
import { loginSuccessAction, loginFailureAction }  from '@app_action/api/account.api.action';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
import { Account } from '@app_model/account.model';
//#endregion


@Injectable()
export class AccountEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountComponentsActionTypes.LOGIN_SUBMIT),

      exhaustMap(action =>

        // Call the service
        this.accountService.login("kevin.gellenoncourt@gmail.com", "patate")
          .pipe(
            map(
              account => this.store.dispatch(
                loginSuccessAction({ account: account })
              )
            )
          )
      )
    )
            /*catchError(error =>
              this.store.dispatch(
                loginFailureAction({ error: error })
              )
            ),*/
/*  );

  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private store: Store<{ account: Account }>
  ) {}
}
 */
