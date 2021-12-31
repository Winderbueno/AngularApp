//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
import { onNgrxForms, setValue, updateGroup, validate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region State, Action
import { DynamicFormValue, LoginFormValue } from '../model/ngrx-form.model';
import { NgrxFormState, initialState } from './ngrx-form.state';
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
          someNumber: obj.someNumber,
          someCheckbox: obj.someCheckbox,
        };
        return v;
      }, {} as DynamicFormValue);

      //const dynamicForm = setValue(newFormValue, state.dynamicForm);

      return {
        ...state,
        //dynamicForm
      }
    }
  ),
);

const validateMyForm = updateGroup<LoginFormValue>({
  username: validate(required),
});

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state, action);
}
