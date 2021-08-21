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
    (state, action) => {
      return {
        ...state,
        keepAfterRouteChange: action.keepAfterRouteChange,
        alert: new Alert({
          type: action.alertType,
          message: action.message,
        }),

      };
    }
  ),

  on(AlertActions.dismissAlert,
    (state) => { return { ...state, alert: undefined }; }
  ),

  on(AlertActions.hasBeenKeptAfterRouteChange,
    (state) => { return { ...state, keepAfterRouteChange: false }; }
  ),

);

export function reducer(state: AlertState | undefined, action: Action) {
  return alertReducer(state, action);
}
