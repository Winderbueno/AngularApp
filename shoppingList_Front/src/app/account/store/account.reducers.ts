//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { AccountState, initialState, adapter } from './account.state';
import * as fromAPI from '../service/account.api.actions';
import * as fromAction from './account.actions';
//#endregion

export const featureKey = 'account';

const accountReducer = createReducer(
  initialState,

  on(
    fromAPI.loginSuccessAction,
    fromAPI.refreshTokenSuccessAction, // TODO - Test that it works
    (state, action) => {
      return adapter.addOne(action.account, {
        ...state,
        isLogged: true
      })
    }
  ),

  on(
    fromAPI.logoutSuccessAction,
    fromAPI.logoutFailureAction,
    fromAction.autoLogoutAction,
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
