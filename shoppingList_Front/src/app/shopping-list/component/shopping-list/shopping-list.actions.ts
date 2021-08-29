//#region NgRx
import { props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//#endregion

//#region App Action
import { createAction } from '@action_creator/creator/action-creator';
import { ActionSource } from '@action_creator/enum/action-source.enum';
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
