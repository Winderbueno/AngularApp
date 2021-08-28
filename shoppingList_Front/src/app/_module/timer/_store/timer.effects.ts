//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region App Action
import * as TimeOutActions from '@timer_store/timer.actions';
//#endregion


@Injectable()
export class TimerEffects {

  defineTimeout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimeOutActions.defineTimer),
      map((action) => {
        // TODO - Change impl and use RxJS Timer ?
        setTimeout(() => this.store.dispatch(action.timer.action), action.timer.time);
        return TimeOutActions.timerDefined({ name: action.timer.name });
      })
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
