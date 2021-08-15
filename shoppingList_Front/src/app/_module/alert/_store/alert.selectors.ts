//#region NgRx
import { AlertState } from './alert.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

export const selectLoader = createFeatureSelector<AlertState>('alert');

export const isLoading = createSelector(
  selectLoader,
  (state: AlertState) => state.isLoading);
