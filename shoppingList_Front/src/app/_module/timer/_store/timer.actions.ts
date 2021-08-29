//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@app_action/creator/action-creator';
import { ActionSource } from '@app_action/enum/action-source.enum';
import { Module } from '@app_action/enum/module.enum';
//#endregion

//#region App Model, Action
import { Timer } from '@app_timer/model/timer.model';
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
  props<{ name: string }>()
);
