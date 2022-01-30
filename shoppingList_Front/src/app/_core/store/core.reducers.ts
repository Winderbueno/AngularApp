//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { CoreState, initialState } from './core.state';
import * as fromAction from './core.actions';
//#endregion

export const featureKey = 'core';

const coreReducer = createReducer(
  initialState,

  on(fromAction.closeSideNavAction,
    (state) => {
      return {
        ...state,
        isOpenSideNav: false,
      };
    }
  ),

  on(fromAction.toggleSideNavAction,
    (state) => {
      return {
        ...state,
        isOpenSideNav: !state.isOpenSideNav,
      };
    }
  ),
);


export function reducer(state: CoreState | undefined, action: Action) {
  return coreReducer(state, action);
}
