//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AccoungPageActions from '@app_action/account-page.action';
//#endregion

//#region App Component, Model, Service
import { Account } from '@app/account/model/account.model';
//#endregion

/* State Definition */
export interface State extends EntityState<Account> {}

/* Initial State Definition */
export const initialState: State = {};


const _accountReducer = createReducer(

  initialState,

  on(AccoungPageActions.login,
    state =>
      ({ ...state,
        account : {
          email: state.account.,
          idAccount: "-1",
        }
      })
  ),


);

export function accountReducer(state:State, action:Action) {
  return _accountReducer(state, action);
}
