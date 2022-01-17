//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { 
  ValidationFn,
  FormGroupState,
  createFormGroupState,
  addGroupControl,
  onNgrxForms,
  updateRecursive,
  validate,
  reset } from 'ngrx-forms';
//#endregion

//#region State, Action
import { FormState, initialState, FormValue } from './form.state';
import * as fromAction from './form.actions';
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
      return newState;
    }),

  on(fromAction.deleteFormAction,
    (state, action) => {
      const newState = { ...state };
      delete newState[action.formId];
      return newState;
    }),

  on(fromAction.resetFormAction,
    (state, action) => {
      const newState = { ...state };
      newState[action.formId] = reset(newState[action.formId]);
      return newState;
    }),

  on(
    fromAction.validateFormAction,
    fromAction.dynamicValidateFormAction,
    (state, action) => {
      const newState = { ...state };

      // Validate Form
      newState[action.formId] = validateFormWithControlValidationFns(
        newState[action.formId],
        action.controlValidationFns);

      return newState;
    }),
  
  on(fromAction.addControlToFormAction,
    (state, action) => {
      const newState = { ...state };

      // Add formControlState to formGroupState
      // TODO - Gerer l'ajout de * FormControl en une fois ?
      newState[action.formId] = addGroupControl<FormValue>(
        newState[action.formId],
        action.control.name,
        action.control.value);

      return newState;
    }),

  on(fromAction.validateControlAction,
    (state, action) => {
      const newState = { ...state };
      let formInfo: string[] = action.controlId.split('.');
      newState[formInfo[0]] = validateByControlId(
        newState[formInfo[0]],
        action.controlId,
        action.ValidationFns);
      return newState;
    }),
);

export function reducer(state: FormState | undefined, action: Action) {
  return formReducer(state, action);
}

const validateByControlId = (
  state:FormGroupState<FormValue>, 
  formControlId:string,
  validationFns: ValidationFn<any>[]) => 
    updateRecursive(state, 
      s => s.id === formControlId ?
        validate(validationFns)(s) :
        s);

const validateFormWithControlValidationFns = (
  state: FormGroupState<FormValue>,
  controlValidationFns: StaticControlValidationFns) =>
  updateRecursive(state,
    s => controlValidationFns[s.id] != undefined ?
      validate(controlValidationFns[s.id])(s) :
      s);