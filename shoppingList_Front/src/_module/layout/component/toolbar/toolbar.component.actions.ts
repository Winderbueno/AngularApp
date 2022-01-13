//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
import { ModuleEnum } from '@module/action/enum/module.enum';
//#endregion

export const toolbarLogOutAction = createAction (
  ModuleEnum.LAYOUT,
  EmitterTypeEnum.COMPONENT,
  'ToolBar/Logout');
