//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

//#region Model
import { AlertTypeEnum } from '../model/enum/alert-type.enum';
//#endregion

export const triggerAlertAction = createAction(
  ModuleEnum.ALERT,
  EmitterTypeEnum.STORE,
  'triggerAlert',
  props<{
    alertType: AlertTypeEnum,
    message: string,
    keepAfterRouteChange?: boolean }>()
);

export const dismissAlertAction = createAction(
  ModuleEnum.ALERT,
  EmitterTypeEnum.STORE,
  'dismissAlert',
);

export const keptAfterRouteChangeAction = createAction(
  ModuleEnum.ALERT,
  EmitterTypeEnum.STORE,
  'keptAfterRouteChange',
);
