//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
import { props } from '@ngrx/store';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { DynamicObject } from '../model/ngrx-form.model';
//#endregion

export const formSubmitAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'Submit',
);

export const SetDynamicObjectsAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'SET_DYNAMIC_OBJECTS',
  props<{ objects: DynamicObject[] }>()
);

