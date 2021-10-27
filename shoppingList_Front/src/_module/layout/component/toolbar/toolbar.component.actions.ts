//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

export const toolbarLogOutAction = createAction (
  ActionSourceEnum.COMPONENT,
  'ToolBar',
  'Logout');
