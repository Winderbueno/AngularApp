//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { ShoppingListState, initialState, adapter } from './shopping-list.state';
import * as fromAPI from '../service/shopping-list.api.actions';
import * as AccountAPIActions from '@account/service/account.api.actions'; // TODO
//#endregion

export const featureKey = 'shopping-list';

const shoppingListReducer = createReducer(
  initialState,

  on(fromAPI.loadActiveSuccessAction,
    (state, { shoppingList }) => {
      return adapter.addOne(shoppingList,
        { ...state,
          isActiveLoaded: true
        }
      )
    }
  ),

  on(
    AccountAPIActions.logoutSuccessAction, // TODO
    AccountAPIActions.logoutFailureAction,
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
