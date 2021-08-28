//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { TimerState, initialState, adapter } from './timer.state';
import * as TimerActions from '@timer_store/timer.actions';
//#endregion


const timeOutReducer = createReducer(
  initialState,

  on(TimerActions.defineTimer,
    (state, action) => { return adapter.addOne(action.timer, state) }
  ),

);

export function reducer(state: TimerState | undefined, action: Action) {
  return timeOutReducer(state, action);
}
