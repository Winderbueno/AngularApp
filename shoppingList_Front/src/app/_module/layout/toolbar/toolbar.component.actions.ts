//#region Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion


export const toolbarLogOut = createAction (
  ActionSource.COMPONENT,
  'ToolBar',
  'Logout');
