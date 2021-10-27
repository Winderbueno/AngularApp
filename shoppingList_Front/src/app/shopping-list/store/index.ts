export const featureKey = 'shoppingList';

/* Reducer */
export {
  reducer
} from './shopping-list.reducers';

/* Action */
export {
  loadActiveAction
} from './action/shopping-list.actions';

/* Selector */
export {
  isActiveLoaded,
  selectActive
} from './selectors/shopping-list.selectors';
