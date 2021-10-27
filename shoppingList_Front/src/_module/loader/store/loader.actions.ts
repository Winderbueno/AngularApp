//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
import { createAction } from '@action/creator/action-creator';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
//#endregion

export const startLoaderAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.LOADER,
  'Start',
  props<{ triggerSource: string }>()
);

export const stopLoaderAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.LOADER,
  'Stop',
);
