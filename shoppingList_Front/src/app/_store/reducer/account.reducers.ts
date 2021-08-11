//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { AccountState, initialState, adapter } from '@app_state/account.state';
import * as AccountAPIActions from '@app_action/api/account.api.actions';
//#endregion


/* Reducer */
const accountReducer = createReducer(
  initialState,

  on(AccountAPIActions.loginSuccess,
    (state, { account }) => {
      return adapter.addOne(account, {
        ...state,
        isLogged: true,
      })
    }
  ),

  // TODO - Do this when Login Success
  /*
    // Get return url from route parameters or default to '/'
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    this.router.navigate([returnUrl]);
    // { ...state, isLogged:true }
  },*/


  // TODO - error: error => { this.alertService.error(error); }
  on(AccountAPIActions.loginFailure,
    state => state),
);

export function reducer(state: AccountState | undefined, action: Action) {
  return accountReducer(state, action);
}
