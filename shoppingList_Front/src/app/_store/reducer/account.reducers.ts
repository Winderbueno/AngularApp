//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { AccountState, initialState, adapter } from '@app_state/account.state';
import * as AccountAPIActions from '@app/_service/action/account.api.actions';
//#endregion


/* Reducer */
const accountReducer = createReducer(
  initialState,

  on(AccountAPIActions.loginSuccess,
    (state, { account }) => {

      /* TODO - Do this when Login Success

        // Execute this :
        startRefreshTokenTimer() {
          if (this.accountValue.jwtToken) {
          // Parse json object from base64 encoded jwt token
          const jwtToken = JSON.parse(atob(this.accountValue.jwtToken.split('.')[1]));

          // Set a timeout to refresh the token a minute before it expires
          const expires = new Date(jwtToken.exp * 1000);
          const timeout = expires.getTime() - Date.now() - (60 * 1000);
          this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
        }*/
      return adapter.addOne(account, {
        ...state,
        isLogged: true,
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
