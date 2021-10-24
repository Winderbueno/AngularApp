//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { Category } from '@module/categorisation/model/category.model';
//#endregion


export const loadCategoryAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.CATEGORISATION,
  'Load Category',
  props<{ category: Category[] }>()
);


export const addCategoryAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.CATEGORISATION,
  'Add',
  props<{ category: Category }>()
);


export const deleteCategoryAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.CATEGORISATION,
  'Delete',
  props<{ name: string }>()
);
