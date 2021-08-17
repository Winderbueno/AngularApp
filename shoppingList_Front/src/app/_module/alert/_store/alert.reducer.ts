//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { AlertState, initialState } from './alert.state';
import * as AlertActions from './alert.actions';
import { Alert } from '../model/alert.model';
//#endregion


/* Reducer */
const alertReducer = createReducer(
  initialState,

  on(AlertActions.triggerAlert,
    (state, { alertType, message, keepAfterRouteChange }) => {
      return {
        ...state,
        alert: new Alert({
          type: alertType,
          message: message,
          keepAfterRouteChange: keepAfterRouteChange
        })
      };
    }
  ),

  on(AlertActions.dismissAlert,
    (state) => {
      return {
        ...state,
        alert: new Alert()
      };
    }
  ),

);

export function reducer(state: AlertState | undefined, action: Action) {
  return alertReducer(state, action);
}
