//#region NgRx
import { createFeatureSelector, createSelector } from '@ngrx/store';
//#endregion

//#region Store
import { FormState } from './form.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<FormState>(featureKey);

export const selectForm = (id: string) =>
  createSelector(selectState, (state: FormState) => state[id]);

export const selectFormValue = (id: string) =>
  createSelector(
    selectState, 
    (state: FormState) => state[id].value);

export const selectControlValue = (formId: string, ctrlId: string) =>
  createSelector(
    selectState,
    (state: FormState) => state[formId].controls[ctrlId].value);