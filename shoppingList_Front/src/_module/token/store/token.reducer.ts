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


const tokenReducer = createReducer(
  initialState,

  on(fromAction.validateTokenAction,
    (state, action) => { return adapter.addOne(action.token, state) }
  ),


  on(fromAction.tokenValidatedAction,
    (state, action) => {
      return adapter.updateOne(
        {
          id: action.name,
          changes: { status: TokenStatusEnum.Valid }
        }, state);
    }
  ),


  on(fromAction.tokenInvalidatedAction,
    (state, action) => {
      return adapter.updateOne(
        {
          id: action.name,
          changes: { status: TokenStatusEnum.Invalid }
        }, state);
    }
  ),


  on(fromAction.deleteTokenAction,
    (state, action) => {
      return adapter.removeOne(action.name, state);
    }
  ),

);


export function reducer(state: TokenState | undefined, action: Action) {
  return tokenReducer(state, action);
}
