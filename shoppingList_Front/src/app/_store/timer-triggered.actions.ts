//#region NgRx
import { createAction } from '@app_action/creator/action-creator';
//#endregion

//#region App Model, Action
import { ActionSource } from '@app_action/enum/action-source.enum';
import { Module } from '@app_action/enum/module.enum';
//#endregion


export const refreshTokenTimeOutEnded = createAction(
  ActionSource.MODULE,
  Module.TIMER,
  'Refresh Token - Ended'
);
