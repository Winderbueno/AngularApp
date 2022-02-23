//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
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