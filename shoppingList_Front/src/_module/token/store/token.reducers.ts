//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region State, Action
import { TokenState, initialState, adapter } from './token.state';
import * as fromAction from './token.actions';
//#endregion

//#region Model
import { TokenStatusEnum } from "../model/enum/token-status.enum";
//#endregion

export const featureKey = 'token';

const tokenReducer = createReducer(
  initialState,

  on(fromAction.validateTokenAction,
    (state, action) =>
      adapter.addOne(action.token, state)),

  on(fromAction.deleteTokenAction,
    (state, action) =>
      adapter.removeOne(action.tokenId, state)),

  on(fromAction.tokenValidatedAction,
    (state, action) => {
      return adapter.updateOne({
          id: action.tokenId,
          changes: { status: TokenStatusEnum.Valid }
        }, state);
    }),

  on(fromAction.tokenInvalidatedAction,
    (state, action) => {
      return adapter.updateOne({
          id: action.tokenId,
          changes: { status: TokenStatusEnum.Invalid }
        }, state);
    }),
);


export function reducer(state: TokenState | undefined, action: Action) {
  return tokenReducer(state, action);
}
