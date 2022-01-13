//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@module/action/enum/module.enum';
import { Categorisation } from '../../model/categorisation.model';
//#endregion

export const loadCategorisationAction = createAction(
  ModuleEnum.CATEGORISATION,
  EmitterTypeEnum.STORE,
  'loadCategorisation',
  props<{ categorisation: Categorisation[] }>()
);

export const addCategorisationAction = createAction(
  ModuleEnum.CATEGORISATION,
  EmitterTypeEnum.STORE,
  'addCategorisation',
  props<{ categorisation: Categorisation }>()
);

export const deleteCategorisationAction = createAction(
  ModuleEnum.CATEGORISATION,
  EmitterTypeEnum.STORE,
  'deleteCategorisation',
  props<{ name: string }>()
);
