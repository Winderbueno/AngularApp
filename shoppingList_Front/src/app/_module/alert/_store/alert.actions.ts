//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@app_action/creator/action-creator';
import { ActionSource } from '@app_action/enum/action-source.enum';
import { Module } from '@app_action/enum/module.enum';
//#endregion

//#region App Model
import { AlertTypeEnum } from '@app_alert/model/enum/alert-type.enum';
//#endregion


export const triggerAlert = createAction(
  ActionSource.MODULE,
  Module.ALERT,
  'Trigger',
  props<{
    alertType: AlertTypeEnum,
    message: string,
    keepAfterRouteChange?: boolean }>()
);


export const dismissAlert = createAction(
  ActionSource.MODULE,
  Module.ALERT,
  'Dismiss',
);


export const hasBeenKeptAfterRouteChange = createAction(
  ActionSource.MODULE,
  Module.ALERT,
  'Kept After Router Change',
);
