//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
//#endregion

//#region App Action
import * as TimeOutSelector from '@app/_store/timeout/timeout.selectors';
import * as TimeOutActions from '@app/_store/timeout/timeout.actions';
import * as AccountAPIActions from '@app_service/action/account.api.actions';
//#endregion


@Injectable()
export class TimeOutEffects {

  startRefreshTokenTimeout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AccountAPIActions.loginSuccess,
        AccountAPIActions.refreshTokenSuccess),
      withLatestFrom(this.store.select(TimeOutSelector.refreshTokenTimeOutTime)),
      map(([action, time]) => {
        setTimeout(() => this.store.dispatch(TimeOutActions.refreshTokenTimeOutEnded()), time);
        return TimeOutActions.startRefreshTokenTimeOut();
      })
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
