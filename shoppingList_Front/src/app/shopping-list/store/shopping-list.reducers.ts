//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingListState, initialState, adapter } from './shopping-list.state';
import * as ShoppingListAPIActions from '@shoppingList/store/action/shopping-list.api.actions';
import * as AccountAPIActions from '@account/store/action/account.api.actions';
//#endregion


/* Reducer */
const shoppingListReducer = createReducer(
  initialState,

  on(ShoppingListAPIActions.loadActiveSuccess,
    (state, { shoppingList }) => {
      return adapter.addOne(shoppingList,
        { ...state,
          isActiveLoaded: true
        }
      )
    }
  ),

  on(
    AccountAPIActions.logoutSuccess,
    AccountAPIActions.logoutFailure,
    (state) => {
      return adapter.removeAll({
        ...state,
        isActiveLoaded: false,
      })
    }
  ),
);

export function reducer(state: ShoppingListState | undefined, action: Action) {
  return shoppingListReducer(state, action);
}
