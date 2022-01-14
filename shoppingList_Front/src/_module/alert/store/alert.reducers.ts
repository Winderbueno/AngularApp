//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { AlertState, initialState } from './alert.state';
import * as fromAction from './alert.actions';
//#endregion

//#region Model
import { Alert } from '../model/alert.model';
//#endregion

export const featureKey = 'alert';

const alertReducer = createReducer(
  initialState,

  on(fromAction.triggerAlertAction,
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

  on(fromAction.dismissAlertAction,
    (state) => { 
      return { ...state, 
        alert: undefined,
        keepAfterRouteChange: false
      }; 
    }
  ),

  on(fromAction.keptAfterRouteChangeAction,
    (state) => { return { ...state, keepAfterRouteChange: false }; }
  ),

);

export function reducer(state: AlertState | undefined, action: Action) {
  return alertReducer(state, action);
}
