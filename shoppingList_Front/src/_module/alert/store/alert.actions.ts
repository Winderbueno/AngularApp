//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { AlertTypeEnum } from '../model/enum/alert-type.enum';
//#endregion


export const triggerAlertAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.ALERT,
  'Trigger',
  props<{
    alertType: AlertTypeEnum,
    message: string,
    keepAfterRouteChange?: boolean }>()
);


export const dismissAlertAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.ALERT,
  'Dismiss',
);


export const keptAfterRouteChangeAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.ALERT,
  'Kept After Route Change',
);
