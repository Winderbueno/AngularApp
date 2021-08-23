//#region Angular & Material
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
//#endregion

//#region NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AppActions from '@app/_store/timeout/timeout.actions';
import * as AccountAPIActions from '@app_service/action/account.api.actions';
//#endregion


@Injectable()
export class TimeOutEffects {

  APPLICATION_TIMEOUT_TIME = 1000 * 5;

  // TODO
  setRefreshTokenTimeout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountAPIActions.loginSuccess),
      map((action) => {

        // startRefreshTokenTimer()
        if (action.account.jwtToken) {
          // Parse json object from base64 encoded jwt token
          const jwtToken = JSON.parse(atob(action.account.jwtToken.split('.')[1]));

          // Set a timeout to refresh the token a minute before it expires
          const expires = new Date(jwtToken.exp * 1000);
          const timeout = expires.getTime() - Date.now() - (60 * 1000);
          this.APPLICATION_TIMEOUT_TIME = timeout;
        }

        return AppActions.startRefreshTokenTimeOut();
      }),
    )
  );

  startRefreshTokenTimeout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.startRefreshTokenTimeOut),
      switchMap( () => timer(this.APPLICATION_TIMEOUT_TIME)),
      map(() => {return AppActions.refreshTokenTimeOutEnded();}),
    )
  );


  constructor(
    private actions$: Actions,
  ) { }
}
