//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@module/action/enum/module.enum';
import { Timer } from '../model/timer.model';
//#endregion

export const defineTimerAction = createAction(
  ModuleEnum.TIMER,
  EmitterTypeEnum.STORE,
  'defineTimer',
  props<{ timer: Timer }>()
);

export const deleteTimerAction = createAction(
  ModuleEnum.TIMER,
  EmitterTypeEnum.STORE,
  'deleteTimer',
  props<{ name: string }>()
);

export const timerDefinedAction = createAction(
  ModuleEnum.TIMER,
  EmitterTypeEnum.STORE,
  'timerDefined',
  props<{
    name: string,
    timeoutHandler: NodeJS.Timeout
  }>()
);

export const timerDeletedAction = createAction(
  ModuleEnum.TIMER,
  EmitterTypeEnum.STORE,
  'timerDeleted',
  props<{ name: string | undefined }>()
);

export const timerEndedAction = createAction(
  ModuleEnum.TIMER,
  EmitterTypeEnum.STORE,
  'timerEnded',
  props<{ name: string | undefined }>()
);
