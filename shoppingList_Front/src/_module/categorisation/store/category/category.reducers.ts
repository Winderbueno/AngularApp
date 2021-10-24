//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { CategoryState, initialState, adapter } from './category.state';
import * as fromAction from './category.actions';
//#endregion

//#region Model
//#endregion

export const featureKey = 'category';

const categoryReducer = createReducer(
  initialState,

  on(fromAction.loadCategoryAction,
    (state, action) => { return adapter.addMany(action.category, state) }
  ),

  on(fromAction.addCategoryAction,
    (state, action) => { return adapter.addOne(action.category, state) }
  ),

  on(fromAction.deleteCategoryAction,
    (state, action) => { return adapter.removeOne(action.name, state); }
  ),

);


export function reducer(state: CategoryState | undefined, action: Action) {
  return categoryReducer(state, action);
}
