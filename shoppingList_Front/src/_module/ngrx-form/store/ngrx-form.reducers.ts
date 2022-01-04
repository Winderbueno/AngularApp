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
  updateGroup, updateRecursive, validate } from 'ngrx-forms';
import { required, requiredTrue } from 'ngrx-forms/validation';
//#endregion

//#region State, Action
import { NgrxFormState, initialState, DynamicFormValue } from './ngrx-form.state';
import * as fromAction from './ngrx-form.actions';
//#endregion

export const featureKey = 'ngrx-form';


const validateMyForm = updateGroup<DynamicFormValue>({
  'MatField': validate(required),
  'Maman': validate(required),
  //'Maman': (validate(required, requiredTrue)) as FormGroupState<string|number|boolean>,
});

const updateByControlId = 
  (state:FormGroupState<DynamicFormValue>, formControlId:string) => 
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
    
    let formInfo:string[] = action.controlId.split('.');

    const newDynamicForms = {...state};
    let form=newDynamicForms[formInfo[0]];    
  
    newDynamicForms[formInfo[0]] = updateByControlId(newDynamicForms[formInfo[0]], action.controlId);

    return newDynamicForms;
  }),

  on(fromAction.CreateFormAction,
    (state, action) => {
      const newDynamicForms = {...state};
      newDynamicForms[action.name]=createFormGroupState<DynamicFormValue>(action.name, {});
      return newDynamicForms;
    }
  ),
  
  on(fromAction.AddGroupControlAction,
    (state, action) => {

      // Add formControlState to formGroupState
      // TODO - Gerer l'ajout de * FormControl en une fois
      const groupWithControl = addGroupControl<DynamicFormValue>(
        state[action.formID],
        action.control.name, 
        action.control.value);

      const newDynamicForms = {...state};
      newDynamicForms[action.formID]=groupWithControl;

      // Add Validators to Control as a UserDefinedProperty
      let formControlId:string = action.formID + '.' + action.control.name;
      newDynamicForms[action.formID] = updateRecursive(newDynamicForms[action.formID], s => {
        if(s.id === formControlId) {
          return setUserDefinedProperty('validationRules', required)(s);
        } else {
          return s;
        }
      })

      return newDynamicForms;
    }
  ),
);

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state, action);
}