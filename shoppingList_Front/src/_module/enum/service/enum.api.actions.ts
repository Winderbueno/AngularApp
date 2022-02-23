//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { Enum } from '../model/enum.model';
//#endregion

export const loadAllSuccessAction = createAction(
  ModuleEnum.Enum,
  EmitterTypeEnum.Api,
  'loadAllSuccess',
  props<{ enums: Enum[] }>()
);

export const loadAllFailureAction = createAction(
  ModuleEnum.Enum,
  EmitterTypeEnum.Api,
  'loadAllFailure',
  props<{ error: string }>()
);