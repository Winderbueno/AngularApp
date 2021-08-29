//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action_creator/creator/action-creator';
import { ActionSource } from '@action_creator/enum/action-source.enum';
import { Module } from '@action_creator/enum/module.enum';
//#endregion

//#region App Model, Action
import { Timer } from '@timer/model/timer.model';
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
