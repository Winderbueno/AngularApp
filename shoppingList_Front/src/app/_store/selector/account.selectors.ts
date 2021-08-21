//#region NgRx
import { AccountState, adapter } from '@app_state/account.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

import {  } from '@ngrx/store';

export const selectAccount = createFeatureSelector<AccountState>('account');

/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();

export const getAccounts = createSelector(selectAccount, selectAll)
export const isLogged = createSelector(selectAccount, (state: AccountState) => state.isLogged);


export const resetTokenStatus = createSelector(selectAccount, (state: AccountState) => state.resetTokenStatus);
