import { createAction, props } from '@ngrx/store';
import { UsedProduct } from '@app_shoppingList/model/used-product.model';


var actionType: string = "[Shopping List Page] ";

export const loadActive = createAction(
  actionType + 'LoadActive'
);

export const resetBoughtStatus = createAction(
  actionType + 'ResetBoughtStatus',
  props<{ ShoppingListId: string }>()
);

export const addProduct = createAction(
  actionType + 'AddProduct',
  props<{ Product: UsedProduct }>()
);

export const updtProduct = createAction(
  actionType + 'UpdtProduct',
  props<{ ShoppingListId: string, Product: UsedProduct }>()
);

export const deleteProduct = createAction(
  actionType + 'DeleteProduct',
  props<{ ShoppingListId: string, ProductId: string }>()
);
