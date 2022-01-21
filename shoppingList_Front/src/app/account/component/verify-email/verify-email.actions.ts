//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

export const emailTokenValidatedAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.COMPONENT,
  'VerifyEmail/emailTokenValidated',
  props<{ message: string }>()
);