//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

export const startLoaderAction = createAction(
  ModuleEnum.Loader,
  EmitterTypeEnum.Store,
  'startLoader',
  props<{ triggerSource: string }>()
);

export const stopLoaderAction = createAction(
  ModuleEnum.Loader,
  EmitterTypeEnum.Store,
  'stopLoader'
);