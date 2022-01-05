//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { 
  addGroupControl, 
  createFormGroupState, 
  FormGroupState, 
  onNgrxForms, 
  onNgrxFormsAction, 
  setUserDefinedProperty, 
  SetValueAction, 
  updateRecursive, 
  validate } from 'ngrx-forms';
import { required, requiredTrue } from 'ngrx-forms/validation';
//#endregion

//#region State, Action
import { NgrxFormState, initialState, FormValue } from './ngrx-form.state';
import * as fromAction from './ngrx-form.actions';
//#endregion

export const featureKey = 'ngrx-form';

const updateByControlId = 
  (state:FormGroupState<FormValue>, formControlId:string) => 
    updateRecursive(state, s => {
      if(s.id === formControlId) {
        return validate(requiredTrue)(s);
      } else {
        return s;
      }
    });


const formReducer = createReducer(
  initialState,
  onNgrxForms(),

  onNgrxFormsAction(SetValueAction, (state, action) => {
    const newFormState = {...state};

    let formInfo:string[] = action.controlId.split('.');    
    newFormState[formInfo[0]] = updateByControlId(newFormState[formInfo[0]], action.controlId);

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
          setUserDefinedProperty('validationRules', required)(s) : s);

      return newFormState;
    }
  ),
);

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state, action);
}