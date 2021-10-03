//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { UsedProduct } from '../../model/used-product.model';
//#endregion


export const loadActiveAction = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'LoadActive'
);


export const resetBoughtStatusAction = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'Reset Bought Status',
  props<{
    ShoppingListId: string }>()
);


export const addProductAction = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'AddProduct',
  props<{
    product: UsedProduct }>()
);


export const updateProductAction = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'UpdtProduct',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);


export const swapProductBoughtStatusAction = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'UpdtProduct',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);


export const deleteProductAction = createAction (
  ActionSource.COMPONENT,
  'Shopping List',
  'DeleteProduct',
  props<{
    ShoppingListId: string,
    ProductId: string }>()
);
