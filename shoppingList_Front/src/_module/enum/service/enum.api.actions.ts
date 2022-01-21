//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
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