//#region NgRx
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//#endregion

//#region App Component, Model
import { UsedProduct } from '@app_model/used-product.model';
//#endregion


/* Action Type */
export enum ShoppingListComponentsActionTypes {
  LOAD_ACTIVE = '[Shopping List Component] LoadActive',
  RESET_BOUGHT_STATUS = '[Shopping List Component] Reset Bought Status',
  ADD_PRODUCT = '[Shopping List Component] AddProduct',
  UPDATE_PRODUCT = '[Shopping List Component] UpdtProduct',
  DELETE_PRODUCT = '[Shopping List Component] DeleteProduct',
}


export const loadActive = createAction(
  ShoppingListComponentsActionTypes.LOAD_ACTIVE
);


export const resetBoughtStatus = createAction(
  ShoppingListComponentsActionTypes.RESET_BOUGHT_STATUS,
  props<{ ShoppingListId: string }>()
);


export const addProduct = createAction(
  ShoppingListComponentsActionTypes.ADD_PRODUCT,
  props<{ product: UsedProduct }>()
);


export const updateProduct = createAction(
  ShoppingListComponentsActionTypes.UPDATE_PRODUCT,
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct>
  }>()
);


export const deleteProduct = createAction(
  ShoppingListComponentsActionTypes.DELETE_PRODUCT,
  props<{
    ShoppingListId: string,
    ProductId: string
  }>()
);
