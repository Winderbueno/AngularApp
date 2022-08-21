//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { EnterpriseState } from './enterprise.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<EnterpriseState>(featureKey);

export const selectIncomeTaxDataSource = createSelector(selectState, 
  (state: EnterpriseState) => 
    state.incomeTaxDataSource);

export const selectIncomeTaxTotalRow = createSelector(selectState, 
  (state: EnterpriseState) => 
    state.incomeTaxDataSource.find(row => row.range === 'Total'));
