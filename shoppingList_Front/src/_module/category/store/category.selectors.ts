//#region NgRx
import { createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { CategoryState, adapter } from './category.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<CategoryState>(featureKey);

/* Entity State */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
