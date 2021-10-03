//#region NgRx
import { ProductState, adapter } from './product.state';
import { createFeatureSelector } from '@ngrx/store';
//#endregion

export const selectProduct = createFeatureSelector<ProductState>('product');

/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
