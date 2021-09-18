//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { AccountState, initialState, adapter } from './account.state';
import * as AccountAPIActions from '@account/store/action/account.api.actions';
//#endregion


/* Reducer */
const accountReducer = createReducer(
  initialState,

  on(AccountAPIActions.loginSuccess,
     AccountAPIActions.refreshTokenSuccess, // TODO - Test that it works
    (state, { account }) => {
      return adapter.addOne(account, {
        ...state,
        isLogged: true
      })
    }
  ),

  on(
    AccountAPIActions.logoutSuccess,
    AccountAPIActions.logoutFailure,
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
