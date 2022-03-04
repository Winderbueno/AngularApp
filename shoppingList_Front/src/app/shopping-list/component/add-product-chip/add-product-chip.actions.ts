//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

export const submitAddProductChipAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Component,
  'submitAddProductChip',
  props<{
    shoppingListId: string,
    controlId: string,
    controlValue: string
  }>()
);