//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@module/action/enum/module.enum';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
//#endregion

//#region Model
import { ShoppingList } from '@shoppingList/model/current/shopping-list.model';
//#endregion

export const loadActiveSuccessAction = createAction(
  ModuleEnum.SHOPPING_LIST,
  EmitterTypeEnum.API,
  'loadActiveSuccess',
  props<{ shoppingList: ShoppingList }>()
);

export const loadActiveFailureAction = createAction(
  ModuleEnum.SHOPPING_LIST,
  EmitterTypeEnum.API,
  'loadActiveFailure',
  props<{ error: string }>()
);

export const resetBoughtStatusSuccessAction = createAction(
  ModuleEnum.SHOPPING_LIST,
  EmitterTypeEnum.API,
  'resetBoughtStatusSuccess',
  props<{ shoppingList: ShoppingList }>()
);

export const resetBoughtStatusFailureAction = createAction(
  ModuleEnum.SHOPPING_LIST,
  EmitterTypeEnum.API,
  'resetBoughtStatusFailure',
  props<{ error: string }>()
);