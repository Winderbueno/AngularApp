//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { LoaderState, initialState } from './loader.state';
import * as LoaderActions from './loader.actions';
//#endregion


/* Reducer */
const loaderReducer = createReducer(
  initialState,

  on(LoaderActions.startLoader,
    (state, { loaderTrigger }) => {
      return {
        ...state,
        isLoading: true,
        loaderTrigger: loaderTrigger
      };
    }
  ),

  on(LoaderActions.stopLoader,
    (state) => {
      return {
        ...state,
        isLoading: false,
        loaderTrigger: "nothing"
      };
    }
  ),

);

export function reducer(state: LoaderState | undefined, action: Action) {
  return loaderReducer(state, action);
}
