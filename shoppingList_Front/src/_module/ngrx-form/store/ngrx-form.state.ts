//#region NgRx
import { FormGroupState, createFormGroupState } from 'ngrx-forms';
import { DynamicFormValue, LoginFormValue } from '../model/ngrx-form.model';
//#endregion

export interface NgrxFormState {
  //dynamicForm: FormGroupState<DynamicFormValue>;
  loginForm: FormGroupState<LoginFormValue>;
}

export const initialState : NgrxFormState = {
  loginForm: createFormGroupState<LoginFormValue>('loginForm', {
    username: '',
    password: '',
    stayLoggedIn: false
  })
};