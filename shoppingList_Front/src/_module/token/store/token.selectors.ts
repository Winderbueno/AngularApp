//#region NgRx
import { TokenState, adapter } from './token.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { filter, memoize } from 'lodash';
import { Dictionary } from '@ngrx/entity';
import { Token } from '../model/token.model';
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
  createSelector(selectToken, (state: TokenState) => state.entities[name]);

// TODO - Why this selector cannot be use in "WithLatestFrom"
/*export const selectTokenByName = (tokenName: string | undefined) =>
  createSelector(
    selectEntities,
    (entities: Dictionary<Token>) => filter(entities, { name: tokenName })
  );*/
