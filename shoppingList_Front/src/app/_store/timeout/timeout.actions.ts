//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region App Action
import { ActionSource } from '@app_action/enum/action-source';
import { createAction } from '@app_action/creator/action-creator';
//#endregion


export const refreshTokenTimeOutEnded = createAction(
  ActionSource.API,
  'Refresh Token TimeOut',
  'Ended',
);

export const startRefreshTokenTimeOut = createAction(
  ActionSource.API,
  'Refresh Token TimeOut',
  'Start',
);
