//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { ShoppingListState, adapter } from './shopping-list.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<ShoppingListState>(featureKey);

/* Entity State */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectActive = createSelector(selectState, selectAll);
export const isActiveLoaded = createSelector(selectState, (state: ShoppingListState) => state.isActiveLoaded);