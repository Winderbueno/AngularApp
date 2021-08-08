//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AccountAPIActionTypes } from '@app_action/api/account.api.action';
import { AccountAPIActions } from '@app_action/api/account.api.action';
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
export function accountReducer(
  state = initialAccountState,
  action: AccountAPIActions): AccountState {

  switch (action.type) {

      case AccountAPIActionTypes.LOGIN_SUCCESS:

// TODO - Clean this
        /* this.accountService.login(this.ctrls.Email.value, this.ctrls.Password.value)
          .pipe(first())
          .subscribe({
            next: () => {
              // Get return url from route parameters or default to '/'
              const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
              this.router.navigate([returnUrl]);
            },
            error: error => { this.alertService.error(error); }
        }); */

        return accountAdapter.addOne(action.payload.account, state);
        // { ...state, isLogged:true }



      default:
          return state;
  }
}

/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = accountAdapter.getSelectors();
