//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { addGroupControl, createFormGroupState, onNgrxForms } from 'ngrx-forms';
//#endregion

//#region State, Action
import { NgrxFormState, initialState, DynamicFormValue } from './ngrx-form.state';
import * as fromAction from './ngrx-form.actions';
//#endregion

export const featureKey = 'ngrx-form';

const formReducer = createReducer(
  initialState,
  onNgrxForms(),

  on(fromAction.CreateFormAction,
    (state, action) => {

      const newDynamicForms = {...state.dynamicForms};
      newDynamicForms[action.name]=createFormGroupState<DynamicFormValue>(action.name, {});

      return { ...state, dynamicForms:newDynamicForms };
    }
  ),
  
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
        state.dynamicForms[action.formID],
        action.control.name, 
        action.control.value);

      const newDynamicForms = {...state.dynamicForms};
      newDynamicForms[action.formID]=groupWithControl;

      return { ...state, dynamicForms:newDynamicForms };
    }
  ),
);

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state, action);
}
