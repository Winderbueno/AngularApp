//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { LoaderState, initialState } from './loader.state';
import * as fromAction from './loader.actions';
//#endregion

export const featureKey = 'loader';

const loaderReducer = createReducer(
  initialState,

  on(fromAction.startLoaderAction,
    (state, { triggerSource }) => {
      return {
        ...state,
        isLoading: true,
        triggerSource: triggerSource
      };
    }
  ),

  on(fromAction.stopLoaderAction,
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
