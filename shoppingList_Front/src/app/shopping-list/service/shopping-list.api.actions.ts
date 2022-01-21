//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
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