//#region NgRx
import { FormGroupState } from 'ngrx-forms';
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
  [id: string]: FormGroupState<DynamicFormValue>;
}

export const initialState : NgrxFormState = {};