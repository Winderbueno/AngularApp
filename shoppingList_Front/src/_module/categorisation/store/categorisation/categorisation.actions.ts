//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { Categorisation } from '../../model/categorisation.model';
//#endregion

export const loadCategorisationAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.CATEGORISATION,
  'Load Categorisation',
  props<{ categorisation: Categorisation[] }>()
);

export const addCategorisationAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.CATEGORISATION,
  'Add Categorisation',
  props<{ categorisation: Categorisation }>()
);

export const deleteCategorisationAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.CATEGORISATION,
  'Delete Categorisation',
  props<{ name: string }>()
);
