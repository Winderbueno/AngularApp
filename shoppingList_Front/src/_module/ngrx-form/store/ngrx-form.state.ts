//#region NgRx
import { FormGroupState, createFormGroupState } from 'ngrx-forms';
//#endregion

/* Form Model */
export interface DynamicObjectFormValue {
  someString?:string;
  someNumber?: number;
  someCheckbox?: boolean;
}

export interface DynamicFormValue {
  [id: string]: DynamicObjectFormValue;
}

export interface NgrxFormState {
  oneForm: FormGroupState<DynamicFormValue>;
}

export const initialState : NgrxFormState = {

  oneForm: createFormGroupState<DynamicFormValue>('oneForm', {
    'formValue1': {someString:''},
    'formValue2': {someString:''}
  }),
};