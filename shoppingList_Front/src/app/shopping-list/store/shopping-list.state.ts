//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//#endregion

//#region Model
import { ShoppingList } from '@shoppingList/model/current/shopping-list.model';
//#endregion

/* State */
export interface ShoppingListState extends EntityState<ShoppingList> {
  // Additional entity state properties
  isActiveLoaded: boolean;

  // View Status
  editMode: boolean;
  accordionExpanded: boolean;
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

    // View Status
    editMode: false,
    accordionExpanded: false
  });
