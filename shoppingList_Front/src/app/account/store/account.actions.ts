//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

export const refreshTokenAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.STORE,
  'refreshToken'
);

export const autoLogOutAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.STORE,
  'autoLogOut',
  props<{ error: string }>()
);