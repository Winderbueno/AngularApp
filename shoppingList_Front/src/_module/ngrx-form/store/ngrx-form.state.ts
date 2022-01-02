//#region NgRx
import { FormGroupState, createFormGroupState } from 'ngrx-forms';
//#endregion

export interface SimpleFormValue {
  username: string;
  password: string;
  stayLoggedIn: boolean;
}

/* Form Model */
export interface DynamicObjectFormValue {
  someString?:string;
  someNumber?: number;
  someCheckbox?: boolean;
}

export interface DynamicFormValue {
  [id: string]: DynamicObjectFormValue;
}

export interface DynamicFormValue2 {
  [id: string]: string | boolean;
}

export interface NgrxFormState {
  dynamicForm1: FormGroupState<DynamicFormValue>;
  dynamicForm2: FormGroupState<DynamicFormValue2>;
  simpleForm: FormGroupState<SimpleFormValue>;
}

export const initialState : NgrxFormState = {

  dynamicForm1: createFormGroupState<DynamicFormValue>('dynamicForm1', {
    'value1': {someString:''},
    'value2': {someString:''}
  }),

  dynamicForm2: createFormGroupState<DynamicFormValue2>('dynamicForm2', {
    'value1': '',
    'value2': ''
  }),

  simpleForm: createFormGroupState<SimpleFormValue>('simpleForm', {
    username: '',
    password: '',
    stayLoggedIn: false
  })
};