//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region Store, Model
import { TokenState, initialState, adapter } from './token.state';
import * as TokenActions from './token.actions';
import { TokenStatusEnum } from "../model/enum/token-status.enum";
//#endregion


const tokenReducer = createReducer(
  initialState,

  on(TokenActions.validateToken,
    (state, action) => { return adapter.addOne(action.token, state) }
  ),


  on(TokenActions.tokenValidated,
    (state, action) => {
      return adapter.updateOne(
        {
          id: action.name,
          changes: { status: TokenStatusEnum.Valid }
        }, state);
    }
  ),

);


export function reducer(state: TokenState | undefined, action: Action) {
  return tokenReducer(state, action);
}
