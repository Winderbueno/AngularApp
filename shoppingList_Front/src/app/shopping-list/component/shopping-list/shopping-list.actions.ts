//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { UsedProduct } from '../../model/current/used-product.model';
//#endregion


export const resetBoughtStatusAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Shopping List',
  'Reset Bought Status',
  props<{
    ShoppingListId: string }>()
);


export const addProductToShoppingListAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Shopping List',
  'AddProduct',
  props<{
    product: UsedProduct }>()
);


export const updateShoppingListProductAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Shopping List',
  'UpdtProduct',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);


export const swapShoppingListProductBoughtStatusAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Shopping List',
  'Swap Product Bought Status',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);


export const deleteProductFromShoppingListAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Shopping List',
  'DeleteProduct',
  props<{
    ShoppingListId: string,
    ProductId: string }>()
);
