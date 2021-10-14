//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
//#endregion


export const refreshTokenAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.ACCOUNT,
  'Refresh Token'
);


export const autoLogOutAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.ACCOUNT,
  'Auto Logout',
  props<{ error: string }>()
);
