//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { UsedProduct } from '../../model/current/used-product.model';
//#endregion

export const deleteProductFromShoppingListAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'deleteProductFromShoppingList',
  props<{
    shoppingListId: string,
    productId: string }>()
);

export const productChipClickedAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'productChipClicked',
  props<{
    shoppingListId: string,
    category: string,
    subCategory: string,
    productUpdate: Update<UsedProduct>
  }>()
);

export const updateShoppingListProductAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'updateShoppingListProduct',
  props<{
    shoppingListId: string,
    product: Update<UsedProduct> }>()
);