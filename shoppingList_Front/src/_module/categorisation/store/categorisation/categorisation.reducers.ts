//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { CategorisationState, initialState, adapter } from './categorisation.state';
import * as fromAction from './categorisation.actions';
//#endregion

//#region Model
//#endregion

export const featureKey = 'categorisation';

const categorisationReducer = createReducer(
  initialState,
  on(fromAction.loadCategorisationAction, (state, action) => adapter.addMany(action.categorisation, state)),
  on(fromAction.addCategorisationAction, (state, action) => adapter.addOne(action.categorisation, state)),
  on(fromAction.deleteCategorisationAction, (state, action) => adapter.removeOne(action.name, state)),
);

export function reducer(state: CategorisationState | undefined, action: Action) {
  return categorisationReducer(state, action);
}
