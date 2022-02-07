//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

//#region Model
import { ValidationFn } from 'ngrx-forms';
import { StaticControlValidationFns } from '../model/validation-fns.model';
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
  props<{ formId: string }>()
);

export const deleteFormAction = createAction(
  ModuleEnum.Form,
  EmitterTypeEnum.Store,
  'deleteForm',
  props<{ formId: string }>()
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
  props<{ formId: string }>()
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
    ValidationFns: ValidationFn<any>[]
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