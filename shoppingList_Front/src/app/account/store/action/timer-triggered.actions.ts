//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { Module } from '@action/enum/module.enum';
//#endregion


export const refreshTokenTimerEndedAction = createAction(
  ActionSource.MODULE,
  Module.TIMER,
  'Refresh Token - Ended'
);
