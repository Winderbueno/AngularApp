//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { TimerState, initialState, adapter } from './timer.state';
import * as TimerActions from '@timer_store/timer.actions';
//#endregion


const timerReducer = createReducer(
  initialState,

  on(TimerActions.defineTimer,
    (state, action) => { return adapter.addOne(action.timer, state) }
  ),


  // When the effect have defined the timer, we add it to the state
  on(TimerActions.timerDefined,
    (state, action) => {
      return adapter.updateOne(
        {
          id: action.name,
          changes: { timeoutHandler: action.timeoutHandler }
        }, state);
    }
  ),

  // When the effect have deleted the timer, we delete it from the state
  on(TimerActions.timerDeleted,
    (state, action) => {
      // TODO - have a name always defined
      if(action.name === undefined){
        return state;
      } else {
        return adapter.removeOne(action.name, state);
      }
    }
  ),

);


export function reducer(state: TimerState | undefined, action: Action) {
  return timerReducer(state, action);
}
