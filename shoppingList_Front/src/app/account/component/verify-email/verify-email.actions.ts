//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

export const emailTokenValidatedAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Component,
  'VerifyEmail/emailTokenValidated',
  props<{ message: string }>()
);