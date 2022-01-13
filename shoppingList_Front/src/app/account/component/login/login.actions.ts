//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
import { ModuleEnum } from '@module/action/enum/module.enum';
//#endregion

export const loginSubmitAction = createAction (
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.COMPONENT,
  'loginSubmit',
  props<{
    email: string,
    password: string }>()
);

