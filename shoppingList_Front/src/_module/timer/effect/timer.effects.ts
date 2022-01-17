//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { of } from 'rxjs';
import { filter, map, withLatestFrom, switchMap } from 'rxjs/operators';
//#endregion

//#region Store
import * as fromStore from '../store';
//#endregion


@Injectable()
export class TimerEffects {

  // TODO - Find a way not to use a class property ?
  name:string|undefined = 'test';
  action!:TypedAction<string>;

  // When requested, define a timer
  defineTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.defineTimerAction),
      map((action) => {

        // TODO - Use RxJS Timer instead of NodeJS.Timeout ?
        let timeout = setTimeout(
          () => this.store.dispatch(fromStore.timerEndedAction({ name: action.timer.name })),
          action.timer.time);

        return fromStore.timerDefinedAction({
          name: action.timer.name,
          timeoutHandler: timeout
        });
      })
    )
  );

  // When requested, delete internal timer
  deleteTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromStore.deleteTimerAction,
        fromStore.timerEndedAction),
      switchMap(action =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectTimerByName(action.name))),
          filter(([, timer]) => timer != undefined),
          map(([, timer]) => {
    
            if(timer?.timeoutHandler != undefined) clearTimeout(timer?.timeoutHandler);
            return fromStore.timerDeletedAction({ name: timer?.name });
          })
        )
      )
    )
  );

  // When a timer end, dispatch its configured action
  dispatchTimerConfiguredAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.timerEndedAction),
      switchMap(action =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectTimerByName(action.name))),
          filter(([, timer]) => timer != undefined),
          map(([, timer]) => {
            if(timer != undefined) { this.action = timer.action; }
            return this.action;
          })
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
