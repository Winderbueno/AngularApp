//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { CategorisationState, adapter } from './categorisation.state';
import { featureKey } from '..';
//#endregion

export const selectState = createFeatureSelector<CategorisationState>(featureKey);

/* Entity State */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectTokenByName = (name: string) =>
  createSelector(selectState, (state: CategorisationState) => state.entities[name]);
