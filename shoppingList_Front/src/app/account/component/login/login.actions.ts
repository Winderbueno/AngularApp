//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

export const loginSubmitAction = createAction (
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.COMPONENT,
  'loginSubmit',
  props<{
    email: string,
    password: string }>()
);