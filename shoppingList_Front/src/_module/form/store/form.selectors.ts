//#region NgRx
import { createFeatureSelector, createSelector } from '@ngrx/store';
//#endregion

//#region Store
import { FormControlState, FormGroupState } from 'ngrx-forms';
import { FormValue } from '../model/form-value.model';
import { FormState } from './form.state';
import { featureKey } from '.';
//#endregion


export function getFormToPersist(formState: FormState): string[] {
  let formIds = Object.keys(formState);
  formIds = formIds.filter(formId =>
    formState[formId].userDefinedProperties.browserPersist === true
  );
  return formIds;
}

export const selectState = createFeatureSelector<FormState>(featureKey);

export const selectForm = (formId: string) =>
  createSelector(
    selectState,
    (state: FormState) => state[formId]);

export const selectFormConf_Validate = (formId: string) =>
  createSelector(
    selectForm(formId),
    (formState: FormGroupState<FormValue>) =>
      formState 
      && formState.userDefinedProperties.validate);

export const selectFormValue = (formId: string) =>
  createSelector(
    selectForm(formId),
    (formState: FormGroupState<FormValue>) =>
      formState
      && formState.value);

export const selectControl = (formId: string, ctrlId: string) =>
  createSelector(
    selectForm(formId),
    (formState: FormGroupState<FormValue>) =>
      formState && formState.controls[ctrlId] as unknown as FormControlState<string | number | boolean>);

export const selectControlValue = (formId: string, ctrlId: string) =>
  createSelector(
    selectControl(formId, ctrlId),
    (ctrlState) => ctrlState && ctrlState.value);