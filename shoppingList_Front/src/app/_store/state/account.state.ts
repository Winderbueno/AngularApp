//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//#endregion

//#region Model
import { Account } from '@app_model/account.model';
import { TokenStatusEnum } from '@app_model/enum/token-status.enum';
//#endregion


/* State */
export interface AccountState extends EntityState<Account> {
  // Additional entity state properties
  // connectedAccountId: string | null;
  isLogged:boolean;
  tokenStatus:TokenStatusEnum;
  refreshTokenTimeout: NodeJS.Timeout;
}


/* Adapter */
export const adapter : EntityAdapter<Account> =
  createEntityAdapter<Account>({
    selectId: (account: Account) => account.accountId,
  });


/* Initial State */
export const initialState: AccountState =
  adapter.getInitialState({
    isLogged: false,
    tokenStatus: TokenStatusEnum.Validating
  });
