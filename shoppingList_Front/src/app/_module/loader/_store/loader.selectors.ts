//#region NgRx
import { LoaderState } from '@loader_store/loader.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

export const selectLoader = createFeatureSelector<LoaderState>('loader');

export const isLoading = createSelector(
  selectLoader,
  (state: LoaderState) => state.isLoading);
