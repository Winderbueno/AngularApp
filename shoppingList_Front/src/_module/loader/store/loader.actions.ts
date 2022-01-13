//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
import { createAction } from '@action/creator/action-creator';
//#endregion

//#region Model
import { ModuleEnum } from '@module/action/enum/module.enum';
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
