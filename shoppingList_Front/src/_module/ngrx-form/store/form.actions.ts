//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
import { props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { FormGroupValidationFns } from '../model/form-validation-fns.model';
import { ValidationFn } from 'ngrx-forms';
//#endregion

/* Action DTO */
export interface FormControlDTO {
  name: string;
  value: string|boolean|number;
}

export const createFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'CREATE_FORM',
  props<{ 
    name: string,
    submitValidAction?: TypedAction<string>,
    submitInvalidAction?: TypedAction<string> }>()
);

export const deleteFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'DELETE_FORM',
  props<{ name: string }>()
);

export const submitFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'SUBMIT_FORM',
  props<{ formId: string }>()
);

export const validateFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'VALIDATE_FORM',
  props<{ 
    formId: string,
    formGroupValidationFns : FormGroupValidationFns }>()
);

export const addGroupControlAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'ADD_GROUP_CONTROL',
  props<{ 
    formId: string,
    control: FormControlDTO }>()
);

export const validateControlAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM_NGRX,
  'VALIDATE_CONTROL',
  props<{ 
    controlId: string,
    ValidationFns : ValidationFn<any>[] }>()
);