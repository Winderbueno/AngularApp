//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region App Model, Action, Selector
import { AlertState } from '@alert/store/alert.state';
//#endregion


export const selectAlert = createFeatureSelector<AlertState>('alert');

export const getAlertState = createSelector(
  selectAlert,
  (state: AlertState) => state);

export const getAlert = createSelector(
  selectAlert,
  (state: AlertState) => state.alert);

export const isAlerting = createSelector(
  selectAlert,
  (state: AlertState) => state.alert != undefined);

export const keepAfterRouteChange = createSelector(
  selectAlert,
  (state: AlertState) => state.keepAfterRouteChange);
