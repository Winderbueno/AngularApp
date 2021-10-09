//#region NgRx, Action Creator
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
//#endregion

export const formSubmitAction = createSubmitAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
);

