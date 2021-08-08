//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ShoppingListAPIActions from '@app_action/api/shopping-list.api.action';
//#endregion

//#region Model
import { ShoppingList } from '@app_model/shopping-list.model';
//#endregion


/* State */
export interface ShoppingListState extends EntityState<ShoppingList> {
  // Additional entity state properties
  isActiveLoaded: boolean;

  // View Status
  edit_mode: boolean;
  accordion_expanded: boolean;
}

/* Adapter */
export const adapter : EntityAdapter<ShoppingList> =
   createEntityAdapter<ShoppingList>();

/* Initial State */
export const initialState: ShoppingListState =
  adapter.getInitialState({
    isActiveLoaded: false,

    // View Status
    edit_mode: false,
    accordion_expanded: false
  });

/* Reducer */
const shoppingListReducer = createReducer(
  initialState,

  on(ShoppingListAPIActions.loadActiveSuccess,
    (state, { shoppingList }) => {
      return adapter.addOne(shoppingList, state)
    }
  ),

  // TODO - error: error => { this.alertService.error(error); }
  on(ShoppingListAPIActions.loadActiveFailure,
    state => state),
);

export function reducer(state: ShoppingListState | undefined, action: Action) {
  return shoppingListReducer(state, action);
}


/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
