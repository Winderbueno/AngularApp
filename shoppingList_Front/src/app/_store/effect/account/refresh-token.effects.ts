//#region Angular & Material
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
import { toolbarLogOut } from '@app_layout/component/toolbar/toolbar.component.actions';
//#endregion

//#region App Service
import { AccountService } from '@app_service/account.service';
//#endregion


@Injectable()
export class RefreshTokenEffects {

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toolbarLogOut /* TODO wich action ? */),
      exhaustMap(() =>
        this.accountService.refreshToken().pipe(
          /* TODO_NGRX
            next:
              set Account info in store
              Then : startRefreshTokenTimer();
            error:  }
          */
          map(() => AccountAPIActions.refreshTokenSuccess()),
          catchError((error) => of(AccountAPIActions.refreshTokenFailure({ error: error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }
}
