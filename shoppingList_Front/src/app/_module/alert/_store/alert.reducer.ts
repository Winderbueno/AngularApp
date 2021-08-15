//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { AlertState, initialState } from './alert.state';
import * as AlertActions from './alert.actions';
//#endregion


/* Reducer */
const alertReducer = createReducer(
  initialState,

  on(AlertActions.triggerAlert,
    (state, { gravity, message, keepAfterRouteChange }) => {
      return {
        ...state,
        gravity: gravity,
        message: message,
        keepAfterRouteChange: keepAfterRouteChange
      };
    }
  ),

  on(AlertActions.dismissAlert,
    (state) => {
      return {...state };
    }
  ),

);

export function reducer(state: AlertState | undefined, action: Action) {
  return alertReducer(state, action);
}
