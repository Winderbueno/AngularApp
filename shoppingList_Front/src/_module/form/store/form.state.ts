//#region Model
import { FormGroupState } from 'ngrx-forms';
import { FormValue } from '@form/model/form-value.model';
//#endregion

export interface FormState {
  [formID: string]: FormGroupState<FormValue>;
}

export const initialState : FormState = {};