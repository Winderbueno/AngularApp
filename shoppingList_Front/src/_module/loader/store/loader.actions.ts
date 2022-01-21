//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

export const startLoaderAction = createAction(
  ModuleEnum.LOADER,
  EmitterTypeEnum.STORE,
  'startLoader',
  props<{ triggerSource: string }>()
);

export const stopLoaderAction = createAction(
  ModuleEnum.LOADER,
  EmitterTypeEnum.STORE,
  'stopLoader'
);