//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { ShoppingList } from '../model/current/shopping-list.model';
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