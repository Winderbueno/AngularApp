export const featureKey = 'loader';

/* Reducer */
export {
  reducer
} from './loader.reducers';

/* Action */
export {
  startLoaderAction,
  stopLoaderAction
} from './loader.actions';

/* Selector */
export {
  selectState,
  isLoading
} from './loader.selectors';
