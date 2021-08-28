//#region NgRx
import { TimerState, adapter } from './timer.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
//#endregion

export const selectTimeOut = createFeatureSelector<TimerState>('timeout');

/* Selector */
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectTimeOutByName =
  createSelector(
    selectEntities,
    (entities) => {
      if(entities != undefined){
        entities[0] // TODO - filter to get the right one based on name (use lodash ?)
      }
    });

export const getTimeOut = createSelector(selectTimeOut, (state: TimerState) => state.entities[0]);
