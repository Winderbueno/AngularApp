//#region NgRx
import { FormGroupState } from 'ngrx-forms';
//#endregion

/* FormValueModel */
export interface FormValue {
  [controlName: string]: string | number | boolean;
}

export interface NgrxFormState {
  [formID: string]: FormGroupState<FormValue>;
}

export const initialState : NgrxFormState = {};