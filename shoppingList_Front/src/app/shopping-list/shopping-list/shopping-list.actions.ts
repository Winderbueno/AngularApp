//#region NgRx
import { props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

//#endregion

//#region App Action
import { createAction } from '@app_action/creator/action-creator';
import { ActionSource } from '@app_action/enum/action-source';
//#endregion

//#region App Model
import { UsedProduct } from '@app_model/used-product.model';
//#endregion


export const loadActive = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'LoadActive'
);


export const resetBoughtStatus = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'Reset Bought Status',
  props<{
    ShoppingListId: string }>()
);


export const addProduct = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'AddProduct',
  props<{
    product: UsedProduct }>()
);


export const updateProduct = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'UpdtProduct',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);


export const deleteProduct = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'DeleteProduct',
  props<{
    ShoppingListId: string,
    ProductId: string }>()
);
