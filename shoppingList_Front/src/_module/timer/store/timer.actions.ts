//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { Timer } from '../model/timer.model';
//#endregion

export const defineTimerAction = createAction(
  ModuleEnum.Timer,
  EmitterTypeEnum.Store,
  'defineTimer',
  props<{ timer: Timer }>()
);

export const deleteTimerAction = createAction(
  ModuleEnum.Timer,
  EmitterTypeEnum.Store,
  'deleteTimer',
  props<{ timerId: string }>()
);

export const timerDefinedAction = createAction(
  ModuleEnum.Timer,
  EmitterTypeEnum.Store,
  'timerDefined',
  props<{
    timerId: string,
    timeoutHandler: NodeJS.Timeout
  }>()
);

export const timerDeletedAction = createAction(
  ModuleEnum.Timer,
  EmitterTypeEnum.Store,
  'timerDeleted',
  props<{ timerId: string | undefined }>()
);

export const timerEndedAction = createAction(
  ModuleEnum.Timer,
  EmitterTypeEnum.Store,
  'timerEnded',
  props<{ timerId: string | undefined }>()
);