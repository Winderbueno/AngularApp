//#region NgRx
import { createAction } from '@app_action/creator/action-creator';
//#endregion

//#region App Model, Action
import { ActionSource } from '@app_action/enum/action-source';
import { Module } from '@app_action/enum/action-module';
//#endregion


export const refreshTokenTimeOutEnded = createAction(
  ActionSource.MODULE,
  Module.TIMER,
  'Refresh Token - Ended'
);
