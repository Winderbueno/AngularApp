//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { AccountState, initialState, adapter } from './account.state';
import * as fromAPI from '../service/account.api.actions';
//#endregion


const accountReducer = createReducer(
  initialState,

  on(
    fromAPI.loginSuccessAction,
    fromAPI.refreshTokenSuccessAction, // TODO - Test that it works
    (state, { account }) => {
      return adapter.addOne(account, {
        ...state,
        isLogged: true
      })
    }
  ),

  on(
    fromAPI.logoutSuccessAction,
    fromAPI.logoutFailureAction,
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
