//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { AccountState, initialState, adapter } from './account.state';
import * as fromAction from './action/';
//#endregion


const accountReducer = createReducer(
  initialState,

  on(
    fromAction.loginSuccessAction,
    fromAction.refreshTokenSuccessAction, // TODO - Test that it works
    (state, { account }) => {
      return adapter.addOne(account, {
        ...state,
        isLogged: true
      })
    }
  ),

  on(
    fromAction.logoutSuccessAction,
    fromAction.logoutFailureAction,
    fromAction.autoLogOutAction,
    (state) => {
      return adapter.removeAll({
        ...state,
        isLogged: false,
      })
    }
  ),
);


export function reducer(state: AccountState | undefined, action: Action) {
  return accountReducer(state, action);
}
