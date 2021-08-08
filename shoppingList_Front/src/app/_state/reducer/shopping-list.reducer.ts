//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ShoppingListPagesActionTypes } from '@app_action/page/shopping-list.page.action';
import { ShoppingListPagesActions }  from '@app_action/page/shopping-list.page.action';
//#endregion

//#region Model
import { ShoppingList } from '@app_model/shopping-list.model';
//#endregion


/* State */
export interface ShoppingListState extends EntityState<ShoppingList> {
  // Additional entity state properties
  isActiveLoaded:boolean;
}

/* Adapter */
export const shoppingListAdapter : EntityAdapter<ShoppingList> =
   createEntityAdapter<ShoppingList>();

/* Initial State */
export const initialShoppingListState: ShoppingListState =
  shoppingListAdapter.getInitialState({
    isActiveLoaded: false
  });

/* Reducer */
export function shoppingListReducer(
  state = initialShoppingListState,
  action: ShoppingListPagesActions): ShoppingListState {

  switch (action.type) {

      case ShoppingListPagesActionTypes.LOAD_ACTIVE:
        return shoppingListAdapter.addOne(null, state);

      case ShoppingListPagesActionTypes.RESET_BOUGHT_STATUS:
        return state;

      default:
          return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = shoppingListAdapter.getSelectors();
