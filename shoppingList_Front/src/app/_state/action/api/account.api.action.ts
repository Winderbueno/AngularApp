//#region NgRx
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion


/* Action */
export type AccountAPIActions = LoginSuccess | LoginFailure;

/* Action Type */
export enum AccountAPIActionTypes {
  LOGIN_SUCCESS = '[Account API] Login Success',
  LOGIN_FAILURE = '[Account API] Login Failure',
}

/* Action Definition */
export class LoginSuccess implements Action {
  readonly type = AccountAPIActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { account: Account }) {}
}

export class LoginFailure implements Action {
  readonly type = AccountAPIActionTypes.LOGIN_FAILURE;

  constructor(public payload: { error: string }) {}
}
