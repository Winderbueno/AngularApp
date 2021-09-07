//#region NgRx
import { Action, createReducer, on } from '@ngrx/store';
//#endregion

//#region App Action, Selector
import { TokenState, initialState, adapter } from './token.state';
import * as TokenActions from '@token/store/token.actions';
//#endregion


const tokenReducer = createReducer(
  initialState,

  on(TokenActions.defineToken,
    (state, action) => { return adapter.addOne(action.token, state) }
  ),


  // When the effect have defined the token, we add it to the state
  on(TokenActions.tokenDefined,
    (state, action) => {
      return adapter.updateOne(
        {
          id: action.name,
          changes: { timeoutHandler: action.timeoutHandler }
        }, state);
    }
  ),

  // When the effect have deleted the token, we delete it from the state
  on(TokenActions.tokenDeleted,
    (state, action) => {
      // TODO - have a name always defined
      if(action.name === undefined){
        return state;
      } else {
        return adapter.removeOne(action.name, state);
      }
    }
  ),

);


export function reducer(state: TokenState | undefined, action: Action) {
  return tokenReducer(state, action);
}
