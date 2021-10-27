//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Action
import * as fromAction from '../store/action/';
import * as fromTimer from '@timer/store/';
//#endregion

//#region Model
import { Timer } from '@timer/model/timer.model';
//#endregion


@Injectable()
export class TimerEffects {

  refreshTokenName:string = 'RefreshToken';

  defineRefreshTokenTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromAction.loginSuccessAction,
        fromAction.refreshTokenSuccessAction
      ),
      map((action) => {

        // Define Refresh Token Timer
        let timer = new Timer({
          name: this.refreshTokenName,
          time: 10000, // TODO - Put this in a config file
          action: fromAction.refreshTokenAction()
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
        fromAction.logoutSuccessAction,
        fromAction.logoutFailureAction,
        fromAction.refreshTokenFailureAction
      ),
      withLatestFrom(this.store.select(fromTimer.selectTimerByName(this.refreshTokenName))),
      filter(([action, timer]) => timer != null),
      map(() => { return fromTimer.deleteTimerAction({ name: this.refreshTokenName }); })
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
