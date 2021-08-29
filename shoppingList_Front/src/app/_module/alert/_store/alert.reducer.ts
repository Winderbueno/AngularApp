//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region App Model, Action, Selector
import { AlertState, initialState } from '@alert_store/alert.state';
import * as AlertActions from '@alert_store/alert.actions';
import { Alert } from '@alert/model/alert.model';
//#endregion


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
