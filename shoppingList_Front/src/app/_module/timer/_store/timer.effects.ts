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

  name: string|undefined = 'test';

  defineTimeout$ = createEffect(() =>
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


  deleteTimeout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimerActions.deleteTimer),
      // TODO - Should get Timer By Name
      withLatestFrom((action) => this.store.select(TimerSelectors.getTimeOut(action.name))),
      map((timer) => {


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
