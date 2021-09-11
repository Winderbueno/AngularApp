//#region NgRx
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { filter, memoize } from 'lodash'; // TODO - Need to use lodash ?
//#endregion

//#region Store, Model
import { TimerState, adapter } from './timer.state';
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
