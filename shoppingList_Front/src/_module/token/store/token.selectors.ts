//#region NgRx
import { TokenState, adapter } from './token.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

export const selectToken = createFeatureSelector<TokenState>('token');

/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectTokenByName = (name: string) =>
  createSelector(
    selectEntities,
    (entities) => entities[name]);
