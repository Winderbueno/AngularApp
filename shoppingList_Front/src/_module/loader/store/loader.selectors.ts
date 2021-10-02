//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region State
import { LoaderState } from './loader.state';
//#endregion


export const selectLoader = createFeatureSelector<LoaderState>('loader');

export const isLoading = createSelector(
  selectLoader,
  (state: LoaderState) => state.isLoading);
