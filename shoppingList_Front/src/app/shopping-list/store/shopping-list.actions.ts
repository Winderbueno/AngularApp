//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@module/action/enum/module.enum';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
//#endregion

export const loadActiveAction = createAction (
  ModuleEnum.SHOPPING_LIST,
  EmitterTypeEnum.STORE,
  'loadActive'
);
