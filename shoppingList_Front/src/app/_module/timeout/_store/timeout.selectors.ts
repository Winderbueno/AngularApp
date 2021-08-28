//#region NgRx
import { TimeOutState } from './timeout.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

export const selectTimeOut = createFeatureSelector<TimeOutState>('timeout');

export const refreshTokenTimeOutTime = createSelector(
  selectTimeOut,
  (state: TimeOutState) => state.refreshTokenTimeOutTime);
