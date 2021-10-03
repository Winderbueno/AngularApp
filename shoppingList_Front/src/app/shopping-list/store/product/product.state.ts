//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//#endregion

//#region Model
import { ShoppingList } from '@shoppingList/model/shopping-list.model';
//#endregion


/* State */
export interface ProductState extends EntityState<ShoppingList> {
  // Additional entity state properties
  isActiveLoaded: boolean;

  // View Status
  edit_mode: boolean;
  accordion_expanded: boolean;
}


/* Adapter */
export const adapter : EntityAdapter<ShoppingList> =
  createEntityAdapter<ShoppingList>({
    selectId: (shoppingList: ShoppingList) => shoppingList.shoppingListId,
  });


/* Initial State */
export const initialState: ShoppingListState =
  adapter.getInitialState({
    isActiveLoaded: false,

    // View Status
    edit_mode: false,
    accordion_expanded: false
  });
