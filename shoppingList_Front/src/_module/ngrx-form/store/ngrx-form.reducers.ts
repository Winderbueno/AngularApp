//#region NgRx
import { Action, createReducer } from '@ngrx/store';
import { onNgrxForms } from 'ngrx-forms';
//#endregion

//#region State, Action
import { NgrxFormState, initialState } from './ngrx-form.state';
//#endregion

export const featureKey = 'ngrx-form';

const formReducer = createReducer(
  initialState,
  onNgrxForms(),
);

export function reducer(state: NgrxFormState | undefined, action: Action) {
  return formReducer(state?.myForm, action);
}
