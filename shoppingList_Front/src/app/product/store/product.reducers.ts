//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { ProductState, initialState, adapter } from './product.state';
import * as fromComponent from '@shoppingList/component';
//#endregion

export const featureKey = 'product';

const productReducer = createReducer(
  initialState,

  // TODO
  on(fromComponent.swapShoppingListProductBoughtStatusAction,
    (state, action) => {
      return adapter.updateOne(
        {
          id: action.ShoppingListId,
          changes: {}
        }, state);
    }
  ),
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
