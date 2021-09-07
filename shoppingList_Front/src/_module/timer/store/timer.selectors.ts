//#region NgRx
import { TimerState, adapter } from './timer.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { filter, memoize } from 'lodash';
import { Dictionary } from '@ngrx/entity';
import { Timer } from '../model/timer.model';
//#endregion

export const selectTimer = createFeatureSelector<TimerState>('timer');

/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectTimerByName = (name: string) =>
  createSelector(selectTimer, (state: TimerState) => state.entities[name]);

// TODO - Why this selector cannot be use in "WithLatestFrom"
/*export const selectTimerByName = (timerName: string | undefined) =>
  createSelector(
    selectEntities,
    (entities: Dictionary<Timer>) => filter(entities, { name: timerName })
  );*/
