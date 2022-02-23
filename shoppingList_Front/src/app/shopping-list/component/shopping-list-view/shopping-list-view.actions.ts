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
    ShoppingListId: string,
    ProductId: string }>()
);

export const swapShoppingListProductBoughtStatusAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'swapShoppingListProductBoughtStatus',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);

export const updateShoppingListProductAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'updateShoppingListProduct',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);