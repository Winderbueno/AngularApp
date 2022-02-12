//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { TokenState, adapter } from './token.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<TokenState>(featureKey);

/* Entity State */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectToken = (tokenId: string) =>
  createSelector(selectState, (state: TokenState) => state.entities[tokenId]);
