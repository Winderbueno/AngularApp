//#region NgRx
import { AccountState, adapter } from './account.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

export const selectAccount = createFeatureSelector<AccountState>('account');

/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();

export const selectAccounts = createSelector(selectAccount, selectAll)
export const isLogged = createSelector(selectAccount, (state: AccountState) => state.isLogged);
