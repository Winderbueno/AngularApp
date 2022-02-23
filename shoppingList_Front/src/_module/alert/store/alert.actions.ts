//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { AlertTypeEnum } from '../model/alert-type.enum';
//#endregion

export const dismissAlertAction = createAction(
  ModuleEnum.Alert,
  EmitterTypeEnum.Store,
  'dismissAlert',
);

export const keptAfterRouteChangeAction = createAction(
  ModuleEnum.Alert,
  EmitterTypeEnum.Store,
  'keptAfterRouteChange',
);

export const triggerAlertAction = createAction(
  ModuleEnum.Alert,
  EmitterTypeEnum.Store,
  'triggerAlert',
  props<{
    alertType: AlertTypeEnum,
    message: string,
    keepAfterRouteChange?: boolean }>()
);