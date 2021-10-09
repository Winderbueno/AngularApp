//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { AccountState, adapter } from './account.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<AccountState>(featureKey);

/* Entity State */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectAccounts = createSelector(selectState, selectAll)
export const isLogged = createSelector(selectState, (state: AccountState) => state.isLogged);
