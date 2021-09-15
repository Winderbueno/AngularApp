//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region Loader Store
import { LoaderState, initialState } from '@loader/store/loader.state';
import * as LoaderActions from '@loader/store/loader.actions';
//#endregion


const loaderReducer = createReducer(
  initialState,

  on(LoaderActions.startLoader,
    (state, { triggerSource }) => {
      return {
        ...state,
        isLoading: true,
        triggerSource: triggerSource
      };
    }
  ),

  on(LoaderActions.stopLoader,
    (state) => {
      return {
        ...state,
        isLoading: false,
        triggerSource: "nothing"
      };
    }
  ),

);

export function reducer(state: LoaderState | undefined, action: Action) {
  return loaderReducer(state, action);
}
