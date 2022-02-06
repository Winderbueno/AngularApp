//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

//#region Model
import { UsedProduct } from '../../model/current/used-product.model';
//#endregion

export const clickOnAddProductButtonAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'clickOnAddProductButton'
);

export const resetBoughtStatusAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'resetBoughtStatus',
  props<{ ShoppingListId: string }>()
);

export const toggleEditModeAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'toggleEditMode'
);