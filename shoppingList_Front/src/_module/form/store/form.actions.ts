//#region NgRx, Action Creator
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
import { props } from '@ngrx/store';
import { ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { ModuleEnum } from '@module/action/enum/module.enum';
import { StaticControlValidationFns } from '../model/validation-fns.model';
//#endregion

/* Action DTO */
export interface FormControlDTO {
  name: string;
  value: string|boolean|number;
}

export const createFormAction = createAction (
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'createForm',
  props<{ formId: string }>()
);

export const deleteFormAction = createAction ( // TODO - Implem this feature
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'deleteForm',
  props<{ formId: string }>()
);

export const submitFormAction = createAction (
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'submitForm',
  props<{ formId: string }>()
);

export const validateFormAction = createAction (
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'validateForm',
  props<{ 
    formId: string,
    controlValidationFns : StaticControlValidationFns }>()
);

export const dynamicValidateFormAction = createAction (
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'dynamicValidateForm',
  props<{ 
    formId: string,
    controlValidationFns : StaticControlValidationFns }>()
);

export const addControlToFormAction = createAction (
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'addControlToForm',
  props<{ 
    formId: string,
    control: FormControlDTO }>()
);

export const validateControlAction = createAction (
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'validateControl',
  props<{ 
    controlId: string,
    ValidationFns : ValidationFn<any>[] }>()
);