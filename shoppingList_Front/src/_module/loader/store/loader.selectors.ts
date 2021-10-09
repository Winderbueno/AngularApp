//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { LoaderState } from './loader.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<LoaderState>(featureKey);

export const isLoading = createSelector(selectState, (state: LoaderState) => state.isLoading);
