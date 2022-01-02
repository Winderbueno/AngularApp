//#region NgRx
import { FormGroupState, createFormGroupState } from 'ngrx-forms';
//#endregion

export interface StaticFormValue {
  username: string;
  password: string;
  stayLoggedIn: boolean;
}

/* Form Model */
export interface DynamicFormValue {
  [id: string]: string | number | boolean;
}

export interface NgrxFormState {
  dynamicForm: FormGroupState<DynamicFormValue>;
  staticForm: FormGroupState<StaticFormValue>;
}

export const initialState : NgrxFormState = {

  dynamicForm: createFormGroupState<DynamicFormValue>('dynamicForm', {
    'value1': '',
    'value2': false
  }),

  staticForm: createFormGroupState<StaticFormValue>('staticForm', {
    username: '',
    password: '',
    stayLoggedIn: false
  })
};