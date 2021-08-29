//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { TimerState, initialState, adapter } from './timer.state';
import * as TimerActions from '@timer_store/timer.actions';
import { filter } from 'lodash';
//#endregion


const timeOutReducer = createReducer(
  initialState,

  on(TimerActions.defineTimer,
    (state, action) => { return adapter.addOne(action.timer, state) }
  ),


  on(TimerActions.timerDefined,
    (state, action) => {
      return adapter.updateOne(
        {
          id: action.name,
          changes: { timeoutHandler: action.timeoutHandler }
        }, state);
    }
  ),


  on(TimerActions.timerDeleted,
    //refreshTokenTimeout: clearTimeout(state.refreshTokenTimeout) // TODO - Check if work
    (state, action) => {
      if(action.name === undefined){
        return state;
      } else {
        return adapter.removeOne(action.name, state);
      }
    }
  ),

);



export function reducer(state: TimerState | undefined, action: Action) {
  return timeOutReducer(state, action);
}
