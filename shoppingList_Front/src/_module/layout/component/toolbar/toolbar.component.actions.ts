//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion


export const toolbarLogOutAction = createAction (
  ActionSource.COMPONENT,
  'ToolBar',
  'Logout');
