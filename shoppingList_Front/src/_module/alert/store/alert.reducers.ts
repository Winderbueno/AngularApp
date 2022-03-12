//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { AlertState, initialState } from './alert.state';
import * as fromAction from './alert.actions';
//#endregion

export const featureKey = 'alert';

const alertReducer = createReducer(
  initialState,

  on(fromAction.triggerAlertAction,
    (state, action) => ({ ...state,
      isAlerting: true,
      keepAfterRouteChange: action.keepAfterRouteChange! })),

  on(fromAction.keptAfterRouteChangeAction,
    (state) => ({ ...state, 
      keepAfterRouteChange: false })),

  on(fromAction.alertDismissedAction,
    (state) => ({ ...state, 
      isAlerting: false })),
);

export function reducer(state: AlertState | undefined, action: Action) {
  return alertReducer(state, action);
}
