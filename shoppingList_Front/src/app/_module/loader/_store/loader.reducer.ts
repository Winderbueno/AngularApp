//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { LoaderState, initialState } from '@loader_store/loader.state';
import * as LoaderActions from '@loader_store/loader.actions';
//#endregion


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
