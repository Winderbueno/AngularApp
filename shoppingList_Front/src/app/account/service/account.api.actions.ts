//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { API } from '@action/enum/api.enum';
//#endregion

//#region Model
import { Account } from '@account/model/account.model';
//#endregion


export const loginSuccessAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Login Success',
  props<{ account: Account }>()
);


export const loginFailureAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Login Failure',
  props<{ error: string }>()
);


export const logoutSuccessAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Logout Success',
);


export const logoutFailureAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Logout Failure',
  props<{ error: string }>()
);


export const registerSuccessAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Register Success',
  props<{ message: string }>()
);


export const registerFailureAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'Register Failure',
  props<{ error: string }>()
);


export const verifyEmailSuccessAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'VerifyEmail Success',
  props<{ message: string }>()
);


export const verifyEmailFailureAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'VerifyEmail Failure',
  props<{ error: string }>()
);


export const forgotPasswordSuccessAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ForgotPassword Success',
  props<{ message: string }>()
);


export const forgotPasswordFailureAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ForgotPassword Failure',
  props<{ error: string }>()
);


export const resetPasswordSuccessAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ResetPassword Success',
  props<{ message: string }>()
);


export const resetPasswordFailureAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ResetPassword Failure',
  props<{ error: string }>()
);


export const refreshTokenSuccessAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'RefreshToken Success',
  props<{ account: Account }>()
);


export const refreshTokenFailureAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'RefreshToken Failure',
  props<{ error: string }>()
);


export const validateResetTokenSuccessAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ValidateResetToken Success',
);


export const validateResetTokenFailureAction = createAction(
  ActionSource.API,
  API.ACCOUNT,
  'ValidateResetToken Failure',
  props<{ error: string }>()
);
