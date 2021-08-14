//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region App Action
import { ActionSource } from '@app_action/enum/action-source';
import { createAction } from '@app_action/creator/action-creator';
//#endregion

//#region Model
import { Account } from '@app_model/account.model';
//#endregion


export const loginSuccess = createAction(
  ActionSource.API,
  'Account',
  'Login Success',
  props<{ account: Account }>());


export const logoutSuccess = createAction(
  ActionSource.API,
  'Account',
  'Logout Success',
);


export const loginFailure = createAction(
  ActionSource.API,
  'Account',
  'Login Failure',
  props<{ error: string }>());

// TODO
export const genericSuccess = createAction(
  ActionSource.API,
  'Account',
  'Generic Success');
