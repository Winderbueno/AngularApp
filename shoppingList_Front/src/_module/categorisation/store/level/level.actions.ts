//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@module/action/enum/module.enum';
import { Level } from '@module/categorisation/model/level.model';
//#endregion

export const loadLevelAction = createAction(
  ModuleEnum.CATEGORISATION,
  EmitterTypeEnum.STORE,
  'loadLevel',
  props<{ levels: Level[] }>()
);

export const addLevelAction = createAction(
  ModuleEnum.CATEGORISATION,
  EmitterTypeEnum.STORE,
  'addLevel',
  props<{ level: Level }>()
);

export const deleteLevelAction = createAction(
  ModuleEnum.CATEGORISATION,
  EmitterTypeEnum.STORE,
  'deleteLevel',
  props<{ name: string }>()
);
