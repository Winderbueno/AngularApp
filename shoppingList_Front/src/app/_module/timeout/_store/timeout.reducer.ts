//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { TimeOutState, initialState } from './timeout.state';
import * as AccountAPIActions from '@app_service/action/account.api.actions';
//#endregion


const timeOutReducer = createReducer(
  initialState,

  on(AccountAPIActions.loginSuccess,
    (state, { account }) => {

      let timeout = state.refreshTokenTimeOutTime;

      // startRefreshTokenTimer()
      if (account.jwtToken) {
        // Parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(account.jwtToken.split('.')[1]));

        // Set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        timeout = expires.getTime() - Date.now() - (60 * 1000);
      }

      return {
        ...state,
        refreshTokenTimeOutTime:timeout
      };
    }
  ),

);

export function reducer(state: TimeOutState | undefined, action: Action) {
  return timeOutReducer(state, action);
}
