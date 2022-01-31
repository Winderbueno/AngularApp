//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

export const autoLogoutAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Store,
  'autoLogout',
  props<{ error: string }>()
);

export const logoutAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Store,
  'logout'
);

export const refreshTokenAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Store,
  'refreshToken'
);