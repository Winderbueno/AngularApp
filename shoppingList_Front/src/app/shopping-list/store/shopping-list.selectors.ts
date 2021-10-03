//#region NgRx
import { ShoppingListState, adapter } from './shopping-list.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

export const selectShoppingList = createFeatureSelector<ShoppingListState>('shoppingList');

/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();

export const selectActive = createSelector(selectShoppingList, selectAll)
