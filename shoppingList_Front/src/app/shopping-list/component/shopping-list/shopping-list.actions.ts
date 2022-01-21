//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

//#region Model
import { UsedProduct } from '../../model/current/used-product.model';
//#endregion

export const resetBoughtStatusAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'resetBoughtStatus',
  props<{ ShoppingListId: string }>()
);

export const addProductToShoppingListAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'addProductToShoppingList',
  props<{ product: UsedProduct }>()
);

export const updateShoppingListProductAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'updateShoppingListProduct',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);

export const swapShoppingListProductBoughtStatusAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'swapShoppingListProductBoughtStatus',
  props<{
    ShoppingListId: string,
    product: Update<UsedProduct> }>()
);

export const deleteProductFromShoppingListAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'deleteProductFromShoppingList',
  props<{
    ShoppingListId: string,
    ProductId: string }>()
);