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


export const loginFailure = createAction(
  ActionSource.API,
  'Account',
  'Login Failure',
  props<{ error: string }>());


export const logoutSuccess = createAction(
  ActionSource.API,
  'Account',
  'Logout Success',
);


export const logoutFailure = createAction(
  ActionSource.API,
  'Account',
  'Logout Failure',
  props<{ error: string }>());


export const registerSuccess = createAction(
  ActionSource.API,
  'Account',
  'Register Success',
);


export const registerFailure = createAction(
  ActionSource.API,
  'Account',
  'Register Failure',
  props<{ error: string }>());


export const verifyEmailSuccess = createAction(
  ActionSource.API,
  'Account',
  'VerifyEmail Success',
);


export const verifyEmailFailure = createAction(
  ActionSource.API,
  'Account',
  'VerifyEmail Failure',
  props<{ error: string }>());


export const forgotPasswordSuccess = createAction(
  ActionSource.API,
  'Account',
  'ForgotPassword Success',
);


export const forgotPasswordFailure = createAction(
  ActionSource.API,
  'Account',
  'ForgotPassword Failure',
  props<{ error: string }>());


export const resetPasswordSuccess = createAction(
  ActionSource.API,
  'Account',
  'ResetPassword Success',
);


export const resetPasswordFailure = createAction(
  ActionSource.API,
  'Account',
  'ResetPassword Failure',
  props<{ error: string }>());


export const refreshTokenSuccess = createAction(
  ActionSource.API,
  'Account',
  'RefreshToken Success',
);


export const refreshTokenFailure = createAction(
  ActionSource.API,
  'Account',
  'RefreshToken Failure',
  props<{ error: string }>());


export const validateResetTokenSuccess = createAction(
  ActionSource.API,
  'Account',
  'ValidateResetToken Success',
);


export const validateResetTokenFailure = createAction(
  ActionSource.API,
  'Account',
  'ValidateResetToken Failure',
  props<{ error: string }>());
