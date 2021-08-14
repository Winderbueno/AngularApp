//#region NgRx
import { props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { createComponentAction } from '@app_action/creator/source-creator/component-action-creator';
//#endregion

//#region App Component, Model
import { UsedProduct } from '@app_model/used-product.model';
//#endregion


export const loadActive = createComponentAction (
  'Shopping List', 'LoadActive'
);


export const resetBoughtStatus = createComponentAction (
  'Shopping List', 'Reset Bought Status',
  props<{
    ShoppingListId: string }>()
);


export const addProduct = createComponentAction (
  'Shopping List', 'AddProduct',
  props<{
    product: UsedProduct }>()
);


export const updateProduct = createComponentAction (
  'Shopping List', 'UpdtProduct',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);


export const deleteProduct = createComponentAction (
  'Shopping List', 'DeleteProduct',
  props<{
    ShoppingListId: string,
    ProductId: string }>()
);
