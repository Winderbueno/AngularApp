//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingListState, initialState, adapter } from '@app_state/shopping-list.state';
import * as ShoppingListAPIActions from '@app/_store/action/api/shopping-list.api.actions';
//#endregion


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
