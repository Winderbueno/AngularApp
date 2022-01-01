//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { addGroupControl, onNgrxForms, setValue, updateGroup, validate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region State, Action
import { NgrxFormState, initialState, DynamicFormValue } from './ngrx-form.state';
import * as fromAction from './ngrx-form.actions';
//#endregion

export const featureKey = 'ngrx-form';

const formReducer = createReducer(
  initialState,
  onNgrxForms(),

  on(fromAction.SetDynamicObjectsAction,
    (state, action) => {

      const newFormValue = action.objects.reduce((v, obj) => {
        v[obj.id] = {
          someString: obj.someString,
          someNumber: obj.someNumber,
          someCheckbox: obj.someCheckbox,
        };
        return v;
      }, {} as DynamicFormValue);
      
      const groupWithControl = addGroupControl<DynamicFormValue>('patate', newFormValue)(state.oneForm);
      //const dynamicForm = setValue(newFormValue, state.);

      return { ...state, oneForm:groupWithControl };
    }
  ),
);

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state, action);
}
