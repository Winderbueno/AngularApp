//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action_creator/creator/action-creator';
import { ActionSource } from '@action_creator/enum/action-source.enum';
import { API } from '@action_creator/enum/api.enum';
//#endregion

//#region App Model
import { Account } from '@app_model/account.model';
//#endregion


export const loginSuccess = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Login Success',
  props<{ account: Account }>()
);


export const loginFailure = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Login Failure',
  props<{ error: string }>()
);


export const logoutSuccess = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Logout Success',
);


export const logoutFailure = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Logout Failure',
  props<{ error: string }>()
);


export const registerSuccess = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Register Success',
  props<{ message: string }>()
);


export const registerFailure = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Register Failure',
  props<{ error: string }>()
);


export const verifyEmailSuccess = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'VerifyEmail Success',
  props<{ message: string }>()
);


export const verifyEmailFailure = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'VerifyEmail Failure',
  props<{ error: string }>()
);


export const forgotPasswordSuccess = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ForgotPassword Success',
  props<{ message: string }>()
);


export const forgotPasswordFailure = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ForgotPassword Failure',
  props<{ error: string }>()
);


export const resetPasswordSuccess = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ResetPassword Success',
  props<{ message: string }>()
);


export const resetPasswordFailure = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ResetPassword Failure',
  props<{ error: string }>()
);


export const refreshTokenSuccess = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'RefreshToken Success',
  props<{ account: Account }>()
);


export const refreshTokenFailure = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'RefreshToken Failure',
  props<{ error: string }>()
);


export const validateResetTokenSuccess = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ValidateResetToken Success',
);


export const validateResetTokenFailure = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ValidateResetToken Failure',
  props<{ error: string }>()
);
