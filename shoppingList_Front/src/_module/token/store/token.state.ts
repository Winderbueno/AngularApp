import { Token } from "../model/token.model";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

/* State */
export interface TokenState extends EntityState<Token> {}

/* Adapter */
export const adapter : EntityAdapter<Token> =
  createEntityAdapter<Token>({
    selectId: (token: Token) => token.name,
  });

/* Initial State */
export const initialState: TokenState =
  adapter.getInitialState({});
