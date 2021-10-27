//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum'; // TODO - Warn dependence sur App...
//#endregion

export const loadEnumAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.ENUM,
  'Load'
);
