//#region Action Creator
import { createAction } from '@action_creator/creator/action-creator';
import { ActionSource } from '@action_creator/enum/action-source.enum';
//#endregion


export const toolbarLogOut = createAction (
  ActionSource.COMPONENT,
  'ToolBar',
  'Logout');
