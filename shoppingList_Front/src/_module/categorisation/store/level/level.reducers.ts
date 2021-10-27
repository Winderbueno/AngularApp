//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { LevelState, initialState, adapter } from './level.state';
import * as fromAction from './level.actions';
//#endregion

//#region Model
//#endregion

const levelReducer = createReducer(
  initialState,
  on(fromAction.loadLevelAction, (state, action) => adapter.addMany(action.levels, state)),
  on(fromAction.addLevelAction, (state, action) => adapter.addOne(action.level, state)),
  on(fromAction.deleteLevelAction, (state, action) => adapter.removeOne(action.name, state)),
);

export function reducer(state: LevelState | undefined, action: Action) {
  return levelReducer(state, action);
}
