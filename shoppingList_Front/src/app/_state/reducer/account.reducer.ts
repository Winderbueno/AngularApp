//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as AccountAPIActions from '@app_action/api/account.api.action';
//#endregion

//#region Model
import { Account } from '@app_model/account.model';
//#endregion


/* State */
export interface AccountState extends EntityState<Account> {
  // Additional entity state properties
  // connectedAccountId: string | null;
  isLogged:boolean;
}


/* Adapter */
export const accountAdapter : EntityAdapter<Account> =
   createEntityAdapter<Account>();


/* Initial State */
export const initialAccountState: AccountState =
  accountAdapter.getInitialState({
    isLogged: false
  });

/* Reducer */
const accountReducer = createReducer(
  initialAccountState,

  on(AccountAPIActions.loginSuccess,
    (state, { account }) => {
      return accountAdapter.addOne(account, state)
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









/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = accountAdapter.getSelectors();
