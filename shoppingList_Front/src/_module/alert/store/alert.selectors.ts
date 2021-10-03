//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region State
import { AlertState } from './alert.state';
//#endregion


export const selectAlert = createFeatureSelector<AlertState>('alert');

export const selectAlertState = createSelector(
  selectAlert,
  (state: AlertState) => state);

export const selectCurrentAlert = createSelector(
  selectAlert,
  (state: AlertState) => state.alert);

export const isAlerting = createSelector(
  selectAlert,
  (state: AlertState) => state.alert != undefined);

export const keepAfterRouteChange = createSelector(
  selectAlert,
  (state: AlertState) => state.keepAfterRouteChange);
