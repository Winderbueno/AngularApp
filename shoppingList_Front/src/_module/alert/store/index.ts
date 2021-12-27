/* Reducer */
export {
  featureKey,
  reducer
} from './alert.reducers';

/* Action */
export {
  triggerAlertAction,
  dismissAlertAction,
  keptAfterRouteChangeAction,
} from './alert.actions';

/* Selector */
export {
  selectState,
  selectCurrentAlert,
  isAlerting
} from './alert.selectors';

/* Enum */
export {
  AlertTypeEnum
} from '../model/enum/alert-type.enum';
