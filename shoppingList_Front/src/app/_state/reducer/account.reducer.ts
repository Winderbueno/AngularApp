//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AccountPagesActionTypes } from '@app/_state/action/page/account.page.action';
import { AccountPagesActions }  from '@app/_state/action/page/account.page.action';
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
  action: AccountPagesActions): AccountState {

  switch (action.type) {

      case AccountPagesActionTypes.LOGIN:

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

        return accountAdapter.updateOne(action.payload.account, state);
        // { ...state, isLogged:true }

      case AccountPagesActionTypes.REGISTER:
        return state;

      case AccountPagesActionTypes.FORGOT_PASSWORD:
        return state;

      case AccountPagesActionTypes.RESET_PASSWORD:
        return state;

      case AccountPagesActionTypes.VERIFY_EMAIL:
        return state;

      default:
          return state;
  }
}
