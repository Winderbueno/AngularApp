//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
//#endregion

// TODO - Change timer Impl
export const refreshTokenTimerEndedAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TIMER,
  'Refresh Token - Ended'
);
