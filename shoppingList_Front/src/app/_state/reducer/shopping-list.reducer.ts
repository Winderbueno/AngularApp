//#region NgRx
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ShoppingListAPIActionTypes } from '@app_action/api/shopping-list.api.action';
import { ShoppingListAPIActions }  from '@app_action/api/shopping-list.api.action';
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
  action: ShoppingListAPIActions): ShoppingListState {

  switch (action.type) {

      case ShoppingListAPIActionTypes.LOAD_ACTIVE_SUCCESS:
        return shoppingListAdapter.addOne(action.payload.shoppingList, state);

      case ShoppingListAPIActionTypes.LOAD_ACTIVE_FAILURE:
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
