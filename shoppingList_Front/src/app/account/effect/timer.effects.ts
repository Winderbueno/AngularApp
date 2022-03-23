//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromTimer from '@timer/store';
import { Timer } from '@timer/model/timer.model';
//#endregion

//#region This
import * as fromAPI from '../service/account.api.actions';
//#endregion


@Injectable()
export class TimerEffects {

  refreshTokenTimerId:string = 'RefreshToken';

  defineRefreshTokenTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromAPI.loginSuccessAction,
        fromAPI.refreshTokenSuccessAction
      ),
      map((action) => {

        // Define Refresh Token Timer
        let timer = new Timer({
          timerId: this.refreshTokenTimerId,
          time: 10000, // TODO - Put this in a config file
        });

        // Get RefreshToken Time
        if (action.account.jwtToken) {
          // Parse json object from base64 encoded jwt token
          const jwtToken = JSON.parse(atob(action.account.jwtToken.split('.')[1]));

          // Set a timer to refresh the token a minute before it expires
          const expires = new Date(jwtToken.exp * 1000);
          timer.time = expires.getTime() - Date.now() - (60 * 1000);
        }

        return fromTimer.defineTimerAction({ timer: timer });
      })
    )
  );

  deleteRefreshTokenTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromAPI.logoutSuccessAction,
        fromAPI.logoutFailureAction,
        fromAPI.refreshTokenFailureAction
      ),
      withLatestFrom(this.store.select(fromTimer.selectTimer(this.refreshTokenTimerId))),
      filter(([, timer]) => timer != null),
      map(() => { return fromTimer.deleteTimerAction({ timerId: this.refreshTokenTimerId }); })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
