//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { CategoryState, initialState, adapter } from './category.state';
import * as fromAction from './category.actions';
//#endregion

//#region Model
//#endregion

const categoryReducer = createReducer(
  initialState,
  on(fromAction.loadCategoryAction, (state, action) => adapter.addMany(action.category, state)),
  on(fromAction.addCategoryAction, (state, action) => adapter.addOne(action.category, state)),
  on(fromAction.deleteCategoryAction, (state, action) => adapter.removeOne(action.name, state)),
);

export function reducer(state: CategoryState, action: Action) {
  return categoryReducer(state, action);
}
