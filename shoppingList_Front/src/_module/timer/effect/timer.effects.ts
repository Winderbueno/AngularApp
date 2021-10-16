//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Store
import * as fromStore from '../store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion


@Injectable()
export class TimerEffects {

  // TODO - Find a way not to use a class property ?
  name:string|undefined = 'test';
  action!:TypedAction<string>;

  defineTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.defineTimerAction),
      map((action) => {
        // TODO - Change impl and use RxJS Timer ?
        let timeout = setTimeout(() =>
          this.store.dispatch(fromStore.timerEndedAction({ name: action.timer.name })),
          action.timer.time);

        return fromStore.timerDefinedAction({
          name: action.timer.name,
          timeoutHandler: timeout
        });
      })
    )
  );


  deleteTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.deleteTimerAction),
      withLatestFrom((action) => this.store.select(fromStore.selectTimerByName(action.name))),
      map(($timer) => {

        // TODO - Why is this an Observable ?
        $timer.subscribe(timer => {
          clearTimeout(timer?.timeoutHandler);
          this.name = timer?.name;
        })

        return fromStore.timerDeletedAction({ name: this.name });
      })
    )
  );


  timerEnded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.timerEndedAction),
      withLatestFrom((action) => this.store.pipe(select(fromStore.selectTimerByName(action.name)))),
      filter((timer) => timer != undefined),
      map(($timer) => {

        // TODO - Why is this an Observable ?
        $timer.subscribe(timer => {
            if(timer != undefined) {this.action = timer.action;}
        })

        return  this.action;
      })
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
