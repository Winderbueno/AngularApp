//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region App Action
import * as TimerActions from '@timer_store/timer.actions';
import * as TimerTriggeredActions from '@app/_store/timer-triggered.actions';
import * as AccountAPIActions from '@app_service/action/account.api.actions';
import { Timer } from '@timer/model/timer.model';
//#endregion


@Injectable()
export class TimerEffects {

  defineRefreshTokenTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountAPIActions.loginSuccess,
        AccountAPIActions.refreshTokenSuccess),
      map((action) => {

        // Define Refresh Token Timer
        let timer = new Timer({ // TODO
          name: 'RefreshToken',
          time: 10000, // TODO - Put this in a config file
          action: TimerTriggeredActions.refreshTokenTimerEnded()
        });

        // Get RefreshToken Time
        if (action.account.jwtToken) {
          // Parse json object from base64 encoded jwt token
          const jwtToken = JSON.parse(atob(action.account.jwtToken.split('.')[1]));

          // Set a timer to refresh the token a minute before it expires
          const expires = new Date(jwtToken.exp * 1000);
          timer.time = expires.getTime() - Date.now() - (60 * 1000);
        }

        return TimerActions.defineTimer({ timer: timer });
      })
    )
  );


  deleteRefreshTokenTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AccountAPIActions.logoutSuccess,
        AccountAPIActions.logoutFailure,
        AccountAPIActions.refreshTokenFailure),
      map(() => {
        return TimerActions.deleteTimer({ name: 'RefreshToken' });
      })
    )
  );





  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
