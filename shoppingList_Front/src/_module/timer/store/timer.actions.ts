//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { Timer } from '../model/timer.model';
//#endregion


export const defineTimerAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TIMER,
  'Define',
  props<{ timer: Timer }>()
);


export const deleteTimerAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TIMER,
  'Delete',
  props<{ name: string }>()
);


export const timerDefinedAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TIMER,
  'Defined',
  props<{
    name: string,
    timeoutHandler: number
  }>()
);


export const timerDeletedAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TIMER,
  'Deleted',
  props<{ name: string | undefined }>()
);


export const timerEndedAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TIMER,
  'Ended',
  props<{ name: string | undefined }>()
);
