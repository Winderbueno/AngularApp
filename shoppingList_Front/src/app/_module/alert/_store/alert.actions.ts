//#region App Action
import { ActionSource } from '@app_action/enum/action-source';
import { createAction } from '@app_action/creator/action-creator';
import { props } from '@ngrx/store';
//#endregion


export const triggerAlert = createAction(
  ActionSource.MODULE,
  'Alert',
  'Trigger',
  props<{
    gravity: string,
    message: string }>()
);


export const dismissAlert = createAction(
  ActionSource.MODULE,
  'Alert',
  'Dismiss',
);
