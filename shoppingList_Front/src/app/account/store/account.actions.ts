//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

export const autoLogOutAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Store,
  'autoLogOut',
  props<{ error: string }>()
);

export const logOutAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Store,
  'logOut'
);

export const refreshTokenAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Store,
  'refreshToken'
);