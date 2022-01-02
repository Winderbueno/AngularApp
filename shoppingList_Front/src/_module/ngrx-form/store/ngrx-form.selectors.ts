//#region NgRx
import { createFeatureSelector, createSelector } from '@ngrx/store';
//#endregion

//#region Store
import { NgrxFormState } from './ngrx-form.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<NgrxFormState>(featureKey);