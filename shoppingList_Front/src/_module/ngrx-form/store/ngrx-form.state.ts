//#region NgRx
import { FormGroupState } from 'ngrx-forms';
//#endregion

/* FormValueModel */
export interface DynamicFormValue {
  [id: string]: string | number | boolean;
}

export interface NgrxFormState {
  [id: string]: FormGroupState<DynamicFormValue>;
}

export const initialState : NgrxFormState = {};