export const featureKey = 'token';

/* Reducer */
export {
  reducer
} from './token.reducers';

/* Action */
export {
  deleteTokenAction,
  validateTokenAction,
  tokenValidatedAction,
  tokenInvalidatedAction
} from './token.actions';

/* Selector */
export {
  selectState,
  selectTokenByName
} from './token.selectors';
