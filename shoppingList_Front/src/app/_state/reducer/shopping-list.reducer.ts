//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import * as ShoppingListPageActions from '../action/shopping-list-page.action';
//#endregion

//#region Model
import { ShoppingList } from '@app_model/shopping-list.model';
//#endregion

export interface State {
  test:string;
  shoppingList: ShoppingList;
}

export const initialState: State = {
  test: "bonjour",
  shoppingList: {
    shoppingListId: "0",
    active: true,
    name: "Default ShoppingList",
    description: "Default ShoppingList",

    idAccount: "-1", // User Id
  },
};


const _shoppingListReducer = createReducer(
  initialState,

  on(ShoppingListPageActions.loadActive,
    state =>
      ({ ...state,
        test : "-1",
        shoppingList : {
          shoppingListId: "0",
          idAccount: "-1",
        }
      })
  ),

  on(ShoppingListPageActions.resetBoughtStatus,
    state =>
    ({ ...state,
      test : "-1",
    })
  ),
);

export function shoppingListReducer(state:State, action:Action) {
  return _shoppingListReducer(state, action);
}
