//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region App Model, Action
import { ActionSource } from '@app_action/enum/action-source';
import { createAction } from '@app_action/creator/action-creator';
import { AlertTypeEnum } from '../model/enum/alert-type.enum';
//#endregion


export const triggerAlert = createAction(
  ActionSource.MODULE,
  'Alert',
  'Trigger',
  props<{
    gravity: AlertTypeEnum,
    message: string,
    keepAfterRouteChange?: boolean }>()
);


export const dismissAlert = createAction(
  ActionSource.MODULE,
  'Alert',
  'Dismiss',
);
