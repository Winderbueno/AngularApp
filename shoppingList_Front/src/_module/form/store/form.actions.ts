//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { ValidationFn } from 'ngrx-forms';
import { StaticControlValidationFns } from '../model/validation-fns.model';
import { FormValue } from '../model/form-value.model';
//#endregion

export const addControlInFormAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'addControlInForm',
  props<{
    formId: string,
    controlName: string,
    controlValue: string | boolean | number
  }>()
);

// TODO - extract from @form module
export const buttonClickedAction = createAction (
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'buttonClicked',
  props<{ buttonId: string }>()
);

export const clearFormValueAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'clearFormValue',
  props<{ formId: string }>()
);

export const createFormAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'createForm',
  props<{
    formId: string,
    validate?: boolean,
    browserPersist?: boolean
  }>()
);

export const deleteFormAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'deleteForm',
  props<{ formIds: string[] }>()
);

export const dynamicValidateFormAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'dynamicValidateForm',
  props<{
    formId: string,
    controlValidationFns: StaticControlValidationFns
  }>()
);

export const formValidatedAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'formValidated',
  props<{ 
    formId: string,
    formValue: FormValue
  }>()
);

export const removeControlInFormAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'removeControlInForm',
  props<{
    formId: string,
    controlName: string
  }>()
);

export const resetFormAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'resetForm',
  props<{ formId: string }>()
);

export const submitFormAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'submitForm',
  props<{ formId: string }>()
);

export const validateControlAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'validateControl',
  props<{
    controlId: string,
    validationFns: ValidationFn<any>[]
  }>()
);

export const validateFormAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'validateForm',
  props<{
    formId: string,
    controlValidationFns: StaticControlValidationFns
  }>()
);