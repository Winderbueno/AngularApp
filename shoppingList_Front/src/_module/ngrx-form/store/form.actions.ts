//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
import { props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { StaticControlValidationFns } from '../model/validation-fns.model';
//#endregion

/* Action DTO */
export interface FormControlDTO {
  name: string;
  value: string|boolean|number;
}

export const createFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'CREATE_FORM',
  props<{ 
    name: string,
    submitValidAction?: TypedAction<string>,
    submitInvalidAction?: TypedAction<string> }>()
);

export const deleteFormAction = createAction ( // TODO - Implem this feature
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'DELETE_FORM',
  props<{ name: string }>()
);

export const submitFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'SUBMIT_FORM',
  props<{ formId: string }>()
);

export const validateFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'VALIDATE_FORM',
  props<{ 
    formId: string,
    controlValidationFns : StaticControlValidationFns }>()
);

export const dynamicValidateFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'DYNAMIC_VALIDATE_FORM',
  props<{ 
    formId: string,
    controlValidationFns : StaticControlValidationFns }>()
);

export const addControlToFormAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'ADD_CONTROL_TO_FORM',
  props<{ 
    formId: string,
    control: FormControlDTO }>()
);

export const validateControlAction = createAction (
  ActionSourceEnum.MODULE,
  ModuleEnum.FORM,
  'VALIDATE_CONTROL',
  props<{ 
    controlId: string,
    ValidationFns : ValidationFn<any>[] }>()
);