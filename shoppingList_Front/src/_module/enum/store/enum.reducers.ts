//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { EnumState, initialState, adapter } from './enum.state';
import * as fromAPI from '../service/enum.api.actions';
//#endregion

export const featureKey = 'enum';

const enumReducer = createReducer(
  initialState,
  on(fromAPI.loadAllSuccessAction, (state, action) => adapter.addMany(action.enums, state)),
);


export function reducer(state: EnumState | undefined, action: Action) {
  return enumReducer(state, action);
}
