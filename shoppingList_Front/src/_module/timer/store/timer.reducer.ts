//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { TimerState, initialState, adapter } from './timer.state';
import * as fromAction from './timer.actions';
//#endregion


const timerReducer = createReducer(
  initialState,

  on(fromAction.defineTimerAction,
    (state, action) => { return adapter.addOne(action.timer, state) }
  ),

  // When the effect have defined the timer, we add it to the state
  on(fromAction.timerDefinedAction,
    (state, action) => {
      return adapter.updateOne(
        {
          id: action.name,
          changes: { timeoutHandler: action.timeoutHandler }
        }, state);
    }
  ),

  // When the effect have deleted the timer, we delete it from the state
  on(fromAction.timerDeletedAction,
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
