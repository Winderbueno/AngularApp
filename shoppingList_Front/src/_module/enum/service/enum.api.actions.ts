//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
//#endregion

//#region Model
import { Enum } from '../model/enum.model';
import { ModuleEnum } from '@module/action/enum/module.enum';
//#endregion

export const loadAllSuccessAction = createAction(
  ModuleEnum.ENUM,
  EmitterTypeEnum.API,
  'LoadAllSuccess',
  props<{ enums: Enum[] }>()
);

export const loadAllFailureAction = createAction(
  ModuleEnum.ENUM,
  EmitterTypeEnum.API,
  'LoadAllFailure',
  props<{ error: string }>()
);
