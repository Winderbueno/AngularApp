//#region NgRx
import { createAction } from '@action_creator/creator/action-creator';
//#endregion

//#region App Model, Action
import { ActionSource } from '@action_creator/enum/action-source.enum';
import { Module } from '@action_creator/enum/module.enum';
//#endregion


export const refreshTokenTimeOutEnded = createAction(
  ActionSource.MODULE,
  Module.TIMER,
  'Refresh Token - Ended'
);
