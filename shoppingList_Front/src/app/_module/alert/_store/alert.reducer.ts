//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { AlertState, initialState } from './alert.state';
import * as AlertActions from './alert.actions';
//#endregion


/* Reducer */
const loaderReducer = createReducer(
  initialState,

  on(AlertActions.triggerAlert,
    (state, { gravity }) => {
      return {
        ...state,
        isLoading: true,
        loaderTrigger: loaderTrigger
      };
    }
  ),

  on(AlertActions.stopLoader,
    (state) => {
      return {
        ...state,
        isLoading: false,
        loaderTrigger: "nothing"
      };
    }
  ),

);

export function reducer(state: AlertState | undefined, action: Action) {
  return loaderReducer(state, action);
}
