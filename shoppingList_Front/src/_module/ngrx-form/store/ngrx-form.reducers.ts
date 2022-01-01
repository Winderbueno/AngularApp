//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { addGroupControl, createFormControlState, onNgrxForms, setValue, updateGroup, validate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region State, Action
import { NgrxFormState, initialState, DynamicFormValue, DynamicFormValue2 } from './ngrx-form.state';
import * as fromAction from './ngrx-form.actions';
//#endregion

export const featureKey = 'ngrx-form';

const formReducer = createReducer(
  initialState,
  onNgrxForms(),

  on(fromAction.AddGroupControl1Action,
    (state, action) => {

      const newFormValue = action.objects.reduce((v, obj) => {
        v[obj.id] = {
          someString: obj.someString,
          someNumber: obj.someNumber,
          someCheckbox: obj.someCheckbox,
        };
        return v;
      }, {} as DynamicFormValue);
      
      const groupWithControl = addGroupControl<DynamicFormValue>('patate', newFormValue)(state.dynamicForm1);
      return { ...state, dynamicForm1:groupWithControl };
    }
  ),

  
  on(fromAction.AddGroupControl2Action,
    (state, action) => {
      
      const control = createFormControlState<string|number|boolean>(
        action.control.name, 
        action.control.value);

      const groupWithControl = addGroupControl<DynamicFormValue2>(
        state.dynamicForm2,
        action.control.name, 
        action.control.value);

      console.log(typeof groupWithControl.controls.test);

      //const dynamicForm = setValue(newFormValue, state.dynamicForm2);

      return { ...state, dynamicForm2:groupWithControl };
    }
  ),


);

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state, action);
}
