//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { ShoppingListState, initialState, adapter } from './shopping-list.state';
import * as fromAPI from '../service/shopping-list.api.actions';
import * as fromComponent from '../component';
import * as AccountAPIActions from '@account/service/account.api.actions'; // TODO
import { Update } from '@ngrx/entity';
import { ShoppingList } from '../model/current/shopping-list.model';
//#endregion

export const featureKey = 'shoppingList';

const shoppingListReducer = createReducer(
  initialState,

  on(fromAPI.loadActiveSuccessAction,
    (state, { shoppingList }) => 
      { return adapter.addOne(shoppingList, { ...state, isActiveLoaded: true }) }
  ),

  on(
    AccountAPIActions.logoutSuccessAction,
    AccountAPIActions.logoutFailureAction,
    AccountAPIActions.refreshTokenFailureAction, // TODO - Any type of Logout should restore state to initial state
    (state) => 
      { return adapter.removeAll({ ...state, isActiveLoaded: false,}) }
  ),

  on(fromComponent.productChipClickedAction,
    (state, action) => {

      let changes = {
        ...state.entities[action.shoppingListId],
        catProducts: state.entities[action.shoppingListId]?.catProducts?.map(
          (item, index) => {
            if (index !== 0) { return item; } // Not the one we want to change
            return { ...item,
              subCatProducts: item.subCatProducts.map(
                (item, index) => {
                  if (index !== 0) { return item; }
                  return { ...item,
                    products: item.products.map(
                      (item, index) => {
                        if (index !== (action.productUpdate.id as number -1)) { return item; }
                        return { ...item,
                          bought: !item.bought
                        };
                      }
                    )
                  };
                }
              )
            }
          }
        )
      }


      let shoppingListUpdt: Update<ShoppingList> = {
        id: action.shoppingListId,
        changes: changes
      };
      
      return adapter.updateOne(shoppingListUpdt, state);
    }
  ),
);


export function reducer(state: ShoppingListState | undefined, action: Action) {
  return shoppingListReducer(state, action);
}
