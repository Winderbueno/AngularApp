//#region NgRx
import { createComponentAction } from '@app_action/creator/by-source/component-action-creator';
//#endregion

export const toolbarLogOut = createComponentAction (
  'ToolBar', 'Logout');
