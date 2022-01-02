//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { addGroupControl, onNgrxForms } from 'ngrx-forms';
//#endregion

//#region State, Action
import { NgrxFormState, initialState, DynamicFormValue } from './ngrx-form.state';
import * as fromAction from './ngrx-form.actions';
//#endregion

export const featureKey = 'ngrx-form';

const formReducer = createReducer(
  initialState,
  onNgrxForms(),
  
  on(fromAction.AddGroupControlAction,
    (state, action) => {

      // TODO - Gerer l'ajout de * FormControl en une fois
      // const newFormValue = action.objects.reduce((v, obj) => {
      //   v[obj.id] = {
      //     someString: obj.someString,
      //     someNumber: obj.someNumber,
      //     someCheckbox: obj.someCheckbox,
      //   };
      //   return v;
      // }, {} as DynamicFormValue);


      const groupWithControl = addGroupControl<DynamicFormValue>(
        state.dynamicForm,
        action.control.name, 
        action.control.value);

      return { ...state, dynamicForm:groupWithControl };
    }
  ),
);

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state, action);
}
