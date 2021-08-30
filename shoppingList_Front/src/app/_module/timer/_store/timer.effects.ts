//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region App Action
import * as TimerActions from '@timer_store/timer.actions';
import * as TimerSelectors from '@timer_store/timer.selectors';
//#endregion


@Injectable()
export class TimerEffects {

  // TODO - Find a way not to use a class property ?
  name: string|undefined = 'test';

  defineTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimerActions.defineTimer),
      map((action) => {
        // TODO - Change impl and use RxJS Timer ?
        let timeout = setTimeout(() => this.store.dispatch(action.timer.action), action.timer.time);

        return TimerActions.timerDefined({
          name: action.timer.name,
          timeoutHandler: timeout
        });
      })
    )
  );


  deleteTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimerActions.deleteTimer),
      withLatestFrom((action) => this.store.select(TimerSelectors.selectTimerByName(action.name))),
      map((timer) => {

        // TODO - Why is this an Observable ?
        timer.subscribe(val => {
          clearTimeout(val?.timeoutHandler);
          this.name = val?.name;
          }
        )

        return TimerActions.timerDeleted({ name: this.name });
      })
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
