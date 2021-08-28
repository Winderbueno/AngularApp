//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { AccountState, initialState, adapter } from './account.state';
import * as AccountAPIActions from '@app/_service/action/account.api.actions';
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

  on(AccountAPIActions.logoutSuccess,
    (state) => {

      return adapter.removeAll({
        ...state,
        isLogged: false,
        //refreshTokenTimeout: clearTimeout(state.refreshTokenTimeout) // TODO - Check if work
      })
    }
  ),

);

export function reducer(state: AccountState | undefined, action: Action) {
  return accountReducer(state, action);
}
