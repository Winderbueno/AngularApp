//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

//#region Model
import { Category } from '../../model/category.model';
//#endregion

export const loadCategoryAction = createAction(
  ModuleEnum.CATEGORISATION,
  EmitterTypeEnum.STORE,
  'loadCategory',
  props<{ category: Category[] }>()
);

export const addCategoryAction = createAction(,
  ModuleEnum.CATEGORISATION,
  EmitterTypeEnum.STORE,
  'addCategory',
  props<{ category: Category }>()
);

export const deleteCategoryAction = createAction(
  ModuleEnum.CATEGORISATION,
  EmitterTypeEnum.STORE,
  'deleteCategory',
  props<{ name: string }>()
);