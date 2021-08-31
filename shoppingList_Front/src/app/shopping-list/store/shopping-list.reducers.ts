//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingListState, initialState, adapter } from './shopping-list.state';
import * as ShoppingListAPIActions from '@app/shopping-list/store/action/shopping-list.api.actions';
import * as AccountAPIActions from '@app/account/store/action/account.api.actions';
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

  on(AccountAPIActions.logoutSuccess,
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
