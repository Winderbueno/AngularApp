//#region NgRx
import { AlertState } from './alert.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

export const selectAlert = createFeatureSelector<AlertState>('alert');

export const getAlert = createSelector(
  selectAlert,
  (state: AlertState) => state.alert);
