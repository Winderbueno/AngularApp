//#region App Action
import { ActionSource } from '@app_action/enum/action-source';
import { createAction } from '@app_action/creator/action-creator';
import { props } from '@ngrx/store';
//#endregion


export const startLoader = createAction(
  ActionSource.MODULE,
  'Loader',
  'Start',
  props<{ loaderTrigger: string }>()
);


export const stopLoader = createAction(
  ActionSource.MODULE,
  'Loader',
  'Stop',
);