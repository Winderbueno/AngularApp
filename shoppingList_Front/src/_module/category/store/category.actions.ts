//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { Category } from '../model/category.model';
//#endregion

export const addCategoryAction = createAction(
  ModuleEnum.Category,
  EmitterTypeEnum.Store,
  'addCategory',
  props<{ category: Category }>()
);

export const deleteCategoryAction = createAction(
  ModuleEnum.Category,
  EmitterTypeEnum.Store,
  'deleteCategory',
  props<{ name: string }>()
);

export const loadCategoryAction = createAction(
  ModuleEnum.Category,
  EmitterTypeEnum.Store,
  'loadCategory',
  props<{ category: Category[] }>()
);