//#region NgRx
import { createFeatureSelector, createSelector } from '@ngrx/store';
//#endregion

//#region Store
import { FormState } from './form.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<FormState>(featureKey);

export const selectFormByID = (id: string) =>
  createSelector(selectState, (state: FormState) => state[id]);