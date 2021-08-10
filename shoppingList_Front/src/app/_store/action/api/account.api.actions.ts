//#region NgRx
import { createAction, props } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion


/* Action Type */
export enum AccountAPIActionTypes {
  LOGIN_SUCCESS = '[Account API] Login Success',
  LOGIN_FAILURE = '[Account API] Login Failure',
  GENERIC_SUCCESS = '[Account API] Generic Success',
}


export const loginSuccess = createAction(
  AccountAPIActionTypes.LOGIN_SUCCESS,
  props<{ account: Account }>());


export const loginFailure = createAction(
  AccountAPIActionTypes.LOGIN_FAILURE,
  props<{ error: string }>());

// TODO
export const genericSuccess = createAction(
  AccountAPIActionTypes.GENERIC_SUCCESS);
