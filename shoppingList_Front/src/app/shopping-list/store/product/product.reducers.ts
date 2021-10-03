//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { ProductState, initialState, adapter } from './product.state';
import * as fromComponent from '../../component';
import * as AccountAPIActions from '@account/service/account.api.actions'; // TODO
//#endregion


const shoppingListReducer = createReducer(
  initialState,

  // TODO
  on(fromComponent.swapProductBoughtStatusAction,
    (state, action) => {
      return adapter.updateOne(
        {
          id: action.ShoppingListId,
          changes: {
            catProducts: action.timeoutHandler }
        }, state);
    }
  ),
);

export function reducer(state: ShoppingListState | undefined, action: Action) {
  return shoppingListReducer(state, action);
}
