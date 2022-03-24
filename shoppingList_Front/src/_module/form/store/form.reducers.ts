//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { 
  ValidationFn,
  FormGroupState,
  createFormGroupState,
  addGroupControl,
  removeGroupControl,
  onNgrxForms,
  updateRecursive,
  validate,
  reset, 
  setUserDefinedProperty } from 'ngrx-forms';
//#endregion

//#region State, Action
import { FormState, initialState } from './form.state';
import * as fromAction from './form.actions';
import { FormValue } from '../model/form-value.model';
import { StaticControlValidationFns } from '../model/validation-fns.model';
//#endregion

export const featureKey = 'form';

const formReducer = createReducer(
  initialState,
  onNgrxForms(),

  on(fromAction.createFormAction,
    (state, action) => {
      const newState = { ...state };
      newState[action.formId] = createFormGroupState<FormValue>(action.formId, {});
      newState[action.formId] = setUserDefinedProperty('validate', action.validate)(newState[action.formId]);
      return newState;
    }),

  on(fromAction.deleteFormAction,
    (state, action) => {
      const newState = { ...state };
      action.formIds.forEach(formId => delete newState[formId]);
      return newState;
    }),

  on(fromAction.resetFormAction,
    (state, action) => {
      const newState = { ...state };
      newState[action.formId] = reset(newState[action.formId]);
      return newState;
    }),

  on(fromAction.clearFormValueAction,
    (state, action) => {
      const newState = { ...state };
      newState[action.formId] = clearFormValue(newState[action.formId]);
      return newState;
    }),

  on(
    fromAction.validateFormAction,
    fromAction.dynamicValidateFormAction,
    (state, action) => {
      const newState = { ...state };
      newState[action.formId] = validateFormWithControlValidationFns(
        newState[action.formId],
        action.controlValidationFns);
      return newState;
    }),
  
  on(fromAction.addControlInFormAction,
    (state, action) => {
      const newState = { ...state };

      // Add control in the form
      newState[action.formId] = addGroupControl<FormValue>(
        newState[action.formId],
        action.controlName,
        action.controlValue);

      return newState;
    }),

  on(fromAction.removeControlInFormAction,
    (state, action) => {
      const newState = { ...state };
      newState[action.formId] = removeGroupControl<FormValue>(
        newState[action.formId],
        action.controlName);
      return newState;
    }),

  on(fromAction.validateControlAction,
    (state, action) => {
      const newState = { ...state };
      let formInfo: string[] = action.controlId.split('.');
      newState[formInfo[0]] = validateByControlId(
        newState[formInfo[0]],
        action.controlId,
        action.validationFns);
      return newState;
    }),
);

export function reducer(state: FormState | undefined, action: Action) {
  return formReducer(state, action);
}

const validateByControlId = (
  state: FormGroupState<FormValue>,
  formControlId: string,
  validationFns: ValidationFn<any>[]) =>
  updateRecursive(state,
    s => s.id === formControlId ?
      validate(validationFns)(s) :
      s);

const validateFormWithControlValidationFns = (
  state: FormGroupState<FormValue>,
  controlValidationFns: StaticControlValidationFns) =>
  updateRecursive(state,
    s => controlValidationFns[s.id] != undefined
      && controlValidationFns[s.id].length != 0 ?
      validate(controlValidationFns[s.id])(s) :
      s);

const clearFormValue = (
  state: FormGroupState<FormValue>) =>
  updateRecursive(state,
    s => { return { ...s, value: '' } });