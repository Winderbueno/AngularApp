//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { 
  FormGroupState,
  createFormGroupState,
  addGroupControl,
  onNgrxForms,
  onNgrxFormsAction,
  MarkAsSubmittedAction, 
  SetValueAction,
  setUserDefinedProperty,
  updateRecursive,
  validate } from 'ngrx-forms';
//#endregion

//#region State, Action
import { NgrxFormState, initialState, FormValue } from './ngrx-form.state';
import * as fromAction from './ngrx-form.actions';
//#endregion

export const featureKey = 'ngrx-form';

const formReducer = createReducer(
  initialState,
  onNgrxForms(),

  onNgrxFormsAction(SetValueAction, (state, action) => {
    const newFormState = {...state};
    let formInfo:string[] = action.controlId.split('.');    
    newFormState[formInfo[0]] = validateByControlId(newFormState[formInfo[0]], action.controlId);
    return newFormState;
  }),

  onNgrxFormsAction(MarkAsSubmittedAction, (state, action) => {
    const newFormState = {...state};
    let formInfo:string[] = action.controlId.split('.');    
    newFormState[formInfo[0]] = validateFormState(newFormState[formInfo[0]]);
    return newFormState;
  }),

  on(fromAction.CreateFormAction,
    (state, action) => {
      const newFormState = {...state};
      newFormState[action.name]=createFormGroupState<FormValue>(action.name, {});
      return newFormState;
    }
  ),
  
  on(fromAction.AddGroupControlAction,
    (state, action) => {
      const newFormState = {...state};

      // Add formControlState to formGroupState
      // TODO - Gerer l'ajout de * FormControl en une fois
      newFormState[action.formID]=addGroupControl<FormValue>(
        newFormState[action.formID],
        action.control.name, 
        action.control.value);

      // Add Validators to Control as a UserDefinedProperty
      let formControlId:string = action.formID + '.' + action.control.name;
      newFormState[action.formID] = updateRecursive(
        newFormState[action.formID], 
        s => s.id === formControlId ?
          setUserDefinedProperty('validationRules', action.control.validationFns)(s) : 
          s);

      return newFormState;
    }
  ),
);

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state, action);
}

const validateByControlId = (state:FormGroupState<FormValue>, formControlId:string) => 
    updateRecursive(state, 
      s => s.id === formControlId ?
        validate(s.userDefinedProperties.validationRules)(s) :
        s);

const validateFormState = (state: FormGroupState<FormValue>) =>
  updateRecursive(state,
    s => s.userDefinedProperties.validationRules != undefined ?
    validate(s.userDefinedProperties.validationRules)(s) :
    s);