//#region NgRx
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion

export enum AccountAPIActionTypes {
  LOGIN_SUCCESS = '[Account API] Login Success',
  LOGIN_FAILURE = '[Account API] Login Failure',
}

export class LoginSuccess implements Action {
  readonly type = AccountAPIActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { account: Update<Account> }) {}
}

export class Register implements Action {
  readonly type = AccountAPIActionTypes.LOGIN_FAILURE;

  constructor(public payload: { AccountId:string }) {}
}
