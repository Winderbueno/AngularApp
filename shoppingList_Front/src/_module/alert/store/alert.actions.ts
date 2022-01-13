//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@module/action/enum/module.enum'; // TODO - there should not be a dependance on APP, this is true for every actions definition in modules
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
