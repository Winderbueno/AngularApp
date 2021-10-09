//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { filter, memoize } from 'lodash'; // TODO - Need to use lodash ?
//#endregion

//#region Store, Model
import { TimerState, adapter } from './timer.state';
import { featureKey } from '.';
import { Timer } from '../model/timer.model';
//#endregion

export const selectState = createFeatureSelector<TimerState>(featureKey);

/* Entity State */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectTimerByName = (name: string) =>
  createSelector(selectState, (state: TimerState) => state.entities[name]);

// TODO - Why this selector cannot be use in "WithLatestFrom"
/*export const selectTimerByName = (timerName: string | undefined) =>
  createSelector(
    selectEntities,
    (entities: Dictionary<Timer>) => filter(entities, { name: timerName })
  );*/
