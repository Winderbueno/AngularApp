//#region NgRx
import { createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { ProductState, adapter } from './product.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<ProductState>(featureKey);

/* Entity State */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();