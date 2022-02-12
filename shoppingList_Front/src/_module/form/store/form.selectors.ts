//#region NgRx
import { createFeatureSelector, createSelector } from '@ngrx/store';
//#endregion

//#region Store
import { FormState } from './form.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<FormState>(featureKey);

export const selectForm = (formId: string) =>
  createSelector(selectState, (state: FormState) => state[formId]);

export const selectFormValue = (formId: string) =>
  createSelector(
    selectState, 
    (state: FormState) => state[formId].value);

export const selectControlValue = (formId: string, ctrlId: string) =>
  createSelector(
    selectState,
    (state: FormState) => state[formId].controls[ctrlId].value);