//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { Module } from '@action/enum/module.enum';
//#endregion

//#region Model
import { Timer } from '../model/timer.model';
//#endregion


export const defineTimer = createAction(
  ActionSource.MODULE,
  Module.TIMER,
  'Define',
  props<{ timer: Timer }>()
);


export const deleteTimer = createAction(
  ActionSource.MODULE,
  Module.TIMER,
  'Delete',
  props<{ name: string }>()
);


export const timerDefined = createAction(
  ActionSource.MODULE,
  Module.TIMER,
  'Defined',
  props<{
    name: string,
    timeoutHandler: number
  }>()
);


export const timerDeleted = createAction(
  ActionSource.MODULE,
  Module.TIMER,
  'Deleted',
  props<{ name: string | undefined }>()
);
