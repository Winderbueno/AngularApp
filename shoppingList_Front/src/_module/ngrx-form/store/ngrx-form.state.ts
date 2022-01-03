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

export interface FormGroupStateMap {
  [id: string]: FormGroupState<DynamicFormValue>;
}

export interface NgrxFormState {
  dynamicForms: FormGroupStateMap;
  staticForm: FormGroupState<StaticFormValue>;
}

export const initialState : NgrxFormState = {
  dynamicForms: {},

  staticForm: createFormGroupState<StaticFormValue>('staticForm', {
    username: '',
    password: '',
    stayLoggedIn: false
  })
};