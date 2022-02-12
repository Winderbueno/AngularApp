//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Action
import * as fromAPI from '../service/account.api.actions';
import * as fromStore from '../store/';
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
        fromAPI.loginSuccessAction,
        fromAPI.refreshTokenSuccessAction
      ),
      map((action) => {

        // Define Refresh Token Timer
        let timer = new Timer({
          timerId: this.refreshTokenName,
          time: 10000, // TODO - Put this in a config file
          action: fromStore.refreshTokenAction()
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
      withLatestFrom(this.store.select(fromTimer.selectTimer(this.refreshTokenName))),
      filter(([, timer]) => timer != null),
      map(() => { return fromTimer.deleteTimerAction({ timerId: this.refreshTokenName }); })
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
