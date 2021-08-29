//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action_creator/creator/action-creator';
import { ActionSource } from '@action_creator/enum/action-source.enum';
import { Module } from '@action_creator/enum/module.enum';
//#endregion

//#region App Model
import { AlertTypeEnum } from '@alert/model/enum/alert-type.enum';
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
