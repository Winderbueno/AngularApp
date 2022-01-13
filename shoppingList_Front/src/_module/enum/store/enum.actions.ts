//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@module/action/enum/module.enum'; // TODO - Warn dependence sur App...
//#endregion

export const loadEnumAction = createAction(
  ModuleEnum.ENUM,
  EmitterTypeEnum.STORE,
  'loadEnum'
);
