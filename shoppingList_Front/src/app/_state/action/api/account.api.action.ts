//#region NgRx
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion


/* Action Type */
export enum AccountAPIActionTypes {
  LOGIN_SUCCESS = '[Account API] Login Success',
  LOGIN_FAILURE = '[Account API] Login Failure',
}


export const loginSuccess = createAction(
  AccountAPIActionTypes.LOGIN_SUCCESS,
  props<{ account: Account }>());


export const loginFailure = createAction(
  AccountAPIActionTypes.LOGIN_FAILURE,
  props<{ error: string }>());
