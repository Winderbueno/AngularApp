export const featureKey = 'timer';

/* Reducer */
export {
  reducer
} from './timer.reducers';

/* Action */
export {
  defineTimerAction,
  deleteTimerAction,
  timerDefinedAction,
  timerDeletedAction,
  timerEndedAction
} from './timer.actions';

/* Selector */
export {
  selectState,
  selectTimerByName
} from './timer.selectors';
