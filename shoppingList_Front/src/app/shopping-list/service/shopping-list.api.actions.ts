//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { ShoppingList } from '../model/current/shopping-list.model';
import { UsedProduct } from '../model/current/used-product.model';
import { CreateProductReq } from '../model/current/create-product-req.model';
//#endregion

export const loadActiveSuccessAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'loadActiveSuccess',
  props<{ shoppingList: ShoppingList }>()
);

export const loadActiveFailureAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'loadActiveFailure',
  props<{ error: string }>()
);

export const resetBoughtStatusSuccessAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'resetBoughtStatusSuccess',
  props<{ shoppingList: ShoppingList }>()
);

export const resetBoughtStatusFailureAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'resetBoughtStatusFailure',
  props<{ error: string }>()
);

export const createProductCallAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'createProductCall',
  props<{ 
    shoppingListId: string
    product: CreateProductReq }>()
);

export const createProductSuccessAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'createProductSuccess',
  props<{ product: UsedProduct }>()
);

export const createProductFailureAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'createProductFailure',
  props<{ error: string }>()
);

export const updtProductSuccessAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'updtProductSuccess',
  props<{ message: any }>()
);

export const updtProductFailureAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'updtProductFailure',
  props<{ error: string }>()
);

export const deleteProductSuccessAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'deleteProductSuccess',
  props<{ message: any }>()
);

export const deleteProductFailureAction = createAction(
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Api,
  'deleteProductFailure',
  props<{ error: string }>()
);