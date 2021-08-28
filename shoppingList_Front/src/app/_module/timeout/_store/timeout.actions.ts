//#region NgRx
import { props } from '@ngrx/store';
import { createAction } from '@app_action/creator/action-creator';
//#endregion

//#region App Action
import { ActionSource } from '@app_action/enum/action-source';
import { Module } from '@app_action/enum/action-module';
//#endregion


export const refreshTokenTimeOutEnded = createAction(
  ActionSource.MODULE,
  Module.TIMEOUT,
  'Refresh Token Ended',
);

export const startRefreshTokenTimeOut = createAction(
  ActionSource.MODULE,
  Module.TIMEOUT,
  'Refresh Token Start',
);
