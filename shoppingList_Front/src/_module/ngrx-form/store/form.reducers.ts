//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { 
  FormGroupState,
  createFormGroupState,
  addGroupControl,
  onNgrxForms,
  setUserDefinedProperty,
  updateRecursive,
  validate, 
  ValidationFn} from 'ngrx-forms';
//#endregion

//#region State, Action
import { FormState, initialState, FormValue } from './form.state';
import * as fromAction from './form.actions';
import { FormGroupValidationFns } from '../model/form-validation-fns.model';
//#endregion

export const featureKey = 'ngrx-form';

const formReducer = createReducer(
  initialState,
  onNgrxForms(),

  on(fromAction.validateControlAction, (state, action) => {
    const newFormState = {...state};
    let formInfo:string[] = action.controlId.split('.');
    newFormState[formInfo[0]] = validateByControlId(
      newFormState[formInfo[0]], 
      action.controlId,
      action.ValidationFns);
    return newFormState;
  }),

  on(fromAction.validateFormAction, (state, action) => {
    const newFormState = {...state};
    newFormState[action.formId] = validateFormState(
      newFormState[action.formId],
      action.formGroupValidationFns);
    return newFormState;
  }),

  on(fromAction.createFormAction,
    (state, action) => {
      const newFormState = {...state};
      newFormState[action.name] = createFormGroupState<FormValue>(action.name, {});
      newFormState[action.name] = setUserDefinedProperty('submitValidAction', action.submitValidAction)(newFormState[action.name]);
      newFormState[action.name] = setUserDefinedProperty('submitInvalidAction', action.submitInvalidAction)(newFormState[action.name]);
      return newFormState;
    }
  ),
  
  on(fromAction.addGroupControlAction,
    (state, action) => {
      const newFormState = {...state};

      // Add formControlState to formGroupState
      // TODO - Gerer l'ajout de * FormControl en une fois
      newFormState[action.formId] = addGroupControl<FormValue>(
        newFormState[action.formId],
        action.control.name, 
        action.control.value);

      return newFormState;
    }
  ),
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

const validateFormState = (
  state: FormGroupState<FormValue>,
  formGroupValidationFns: FormGroupValidationFns) =>
  updateRecursive(state,
    s => formGroupValidationFns[s.id] != undefined ?
      validate(formGroupValidationFns[s.id])(s) :
      s);