//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { CategorisationState, initialState, adapter } from './categorisation.state';
import * as fromAction from './categorisation.actions';
//#endregion

const tokenReducer = createReducer(
  initialState,

  on(fromAction.addCategorisationAction,
    (state, action) => { return adapter.addOne(action., state) }
  ),


  on(fromAction.deleteCategorisationAction,
    (state, action) => { return adapter.removeOne(action.name, state); }
  ),

);


export function reducer(state: TokenState | undefined, action: Action) {
  return tokenReducer(state, action);
}
