//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
import { props } from '@ngrx/store';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { ValidationFn } from 'ngrx-forms';
//#endregion

/* Action DTO */
export interface FormControlDTO {
  name: string;
  value: string|boolean|number;
  validationFns? : ValidationFn<any>[];
}

export const AddGroupControlAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'ADD_GROUP_CONTROL',
  props<{ 
    formID : string,
    control : FormControlDTO }>()
);

export const CreateFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'CREATE_FORM',
  props<{ name: string }>()
);

export const DeleteFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'DELETE_FORM',
  props<{ name: string }>()
);

export const formSubmitAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'Submit',
);