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
    fromAPI.refreshTokenSuccessAction,
      (state, action) => (adapter.addOne(action.account, { ...state, isLogged: true }))
  ),

  on(
    fromAPI.logoutSuccessAction,
    fromAPI.logoutFailureAction,
    fromAction.autoLogoutAction,
      (state) => (adapter.removeAll({ ...state, isLogged: false }))
  ),

  on(fromAction.logoutAction, 
      (state) => ({ ...state, isLogged: false })),
);


export function reducer(state: AccountState | undefined, action: Action) {
  return accountReducer(state, action);
}
