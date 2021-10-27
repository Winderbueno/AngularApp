export const featureKey = 'categorisation';

/* Reducer */
export {
  reducer
} from './categorisation.reducers';

/* Action */
export {
  loadCategorisationAction,
  addCategorisationAction,
  deleteCategorisationAction
} from './categorisation.actions';

/* Selector */
export {
  selectState,
} from './categorisation.selectors';
