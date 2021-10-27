//#region NgRx
import { createFeatureSelector } from '@ngrx/store';
//#endregion

//#region Store
import { LevelState, adapter } from './level.state';
import { featureKey } from '.';
//#endregion

export const selectState = createFeatureSelector<LevelState>(featureKey);

/* Entity State */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
