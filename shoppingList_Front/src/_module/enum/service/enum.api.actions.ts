//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { APIEnum } from '@app/model/enum/api.enum';
import { Enum } from '../model/enum.model';
//#endregion

export const loadAllSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ENUM,
  'Load All Success',
  props<{ enums: Enum[] }>()
);

export const loadAllFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ENUM,
  'Load All Failure',
  props<{ error: string }>()
);
