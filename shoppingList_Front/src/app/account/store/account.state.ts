//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//#endregion

//#region Model
import { Account } from '@account/model/account.model';
//#endregion

/* State */
export interface AccountState extends EntityState<Account> {
  // connectedUserId: string | null;
  isLogged:boolean;
}

/* Adapter */
export const adapter : EntityAdapter<Account> =
  createEntityAdapter<Account>({
    selectId: (account: Account) => account.userId!,
  });

/* Initial State */
export const initialState: AccountState = adapter.getInitialState({ isLogged: false });
