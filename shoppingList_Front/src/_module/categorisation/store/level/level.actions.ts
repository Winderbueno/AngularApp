//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { Level } from '@module/categorisation/model/level.model';
//#endregion

export const loadLevelAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.CATEGORISATION,
  'Load Level',
  props<{ levels: Level[] }>()
);

export const addLevelAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.CATEGORISATION,
  'Add Level',
  props<{ level: Level }>()
);

export const deleteLevelAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.CATEGORISATION,
  'Delete Level',
  props<{ name: string }>()
);
