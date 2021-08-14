//#region NgRx
import { ShoppingListState, adapter } from '@app_state/shopping-list.state';
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

export const getActive = createSelector(selectShoppingList, selectAll)
