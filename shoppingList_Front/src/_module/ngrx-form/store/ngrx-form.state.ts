//#region NgRx
import { FormGroupState, createFormGroupState } from 'ngrx-forms';
import { NgrxFormModel } from '../model/ngrx-form.model';
//#endregion

export interface NgrxFormState {
  myForm: FormGroupState<NgrxFormModel>;
}

const FORM_ID = 'some globally unique string';

export const initialState = createFormGroupState<NgrxFormModel>(FORM_ID, {
  someTextInput: '',
  someCheckbox: false,
  nested: {
    someNumber: 0,
  },
});