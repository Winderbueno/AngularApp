//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { Module } from '@action/enum/module.enum';
//#endregion

//#region Model
import { AlertTypeEnum } from '../model/enum/alert-type.enum';
//#endregion


export const triggerAlertAction = createAction(
  ActionSource.MODULE,
  Module.ALERT,
  'Trigger',
  props<{
    alertType: AlertTypeEnum,
    message: string,
    keepAfterRouteChange?: boolean }>()
);


export const dismissAlertAction = createAction(
  ActionSource.MODULE,
  Module.ALERT,
  'Dismiss',
);


export const keptAfterRouteChangeAction = createAction(
  ActionSource.MODULE,
  Module.ALERT,
  'Kept After Route Change',
);
