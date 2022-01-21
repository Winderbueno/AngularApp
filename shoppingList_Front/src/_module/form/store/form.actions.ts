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

export const createFormAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'createForm',
  props<{ formId: string }>()
);

export const deleteFormAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'deleteForm',
  props<{ formId: string }>()
);

export const resetFormAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'resetForm',
  props<{ formId: string }>()
);

export const clearFormValueAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'clearFormValue',
  props<{ formId: string }>()
);

export const submitFormAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'submitForm',
  props<{ formId: string }>()
);

export const validateFormAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'validateForm',
  props<{
    formId: string,
    controlValidationFns: StaticControlValidationFns
  }>()
);

export const dynamicValidateFormAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'dynamicValidateForm',
  props<{
    formId: string,
    controlValidationFns: StaticControlValidationFns
  }>()
);

export const addControlInFormAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'addControlInForm',
  props<{
    formId: string,
    controlName: string,
    controlValue: string | boolean | number
  }>()
);

export const removeControlInFormAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'removeControlInForm',
  props<{
    formId: string,
    controlName: string
  }>()
);

export const validateControlAction = createAction(
  ModuleEnum.FORM,
  EmitterTypeEnum.STORE,
  'validateControl',
  props<{
    controlId: string,
    ValidationFns: ValidationFn<any>[]
  }>()
);