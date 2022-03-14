//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//#endregion

//#region Model
import { ShoppingList } from '../model/shopping-list.model';
//#endregion

/* State */
export interface ShoppingListState extends EntityState<ShoppingList> {
  // Additional entity state properties
  isActiveLoaded: boolean;
}

/* Adapter */
export const adapter : EntityAdapter<ShoppingList> =
  createEntityAdapter<ShoppingList>({
    selectId: (shoppingList: ShoppingList) => shoppingList.shoppingListId,
  });

/* Initial State */
// TODO - Separate Entity state & View State
export const initialState: ShoppingListState =
  adapter.getInitialState({
    isActiveLoaded: false,
  });
