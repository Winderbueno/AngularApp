//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { CoreState } from './core.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<CoreState>(featureKey);

export const isOpenSideNav = createSelector(
  selectState, 
  (state: CoreState) => state.isOpenSideNav);
