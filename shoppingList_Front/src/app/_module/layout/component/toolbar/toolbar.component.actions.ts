//#region App Action
import { createAction } from '@app_action/creator/action-creator';
import { ActionSource } from '@app_action/enum/action-source';
//#endregion

export const toolbarLogOut = createAction (
  ActionSource.COMPONENT,
  'ToolBar',
  'Logout');
