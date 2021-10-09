//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
//#endregion


export const loadActiveAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.SHOPPING_LIST,
  'LoadActive'
);
