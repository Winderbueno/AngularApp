//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

export const loadActiveAction = createAction (
  ModuleEnum.ShoppingList,
  EmitterTypeEnum.Store,
  'loadActive'
);
