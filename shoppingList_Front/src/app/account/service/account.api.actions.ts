//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { APIEnum } from '@app/model/enum/api.enum';
import { Account } from '@account/model/account.model';
//#endregion

export const loginSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'Login Success',
  props<{ account: Account }>()
);

export const loginFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'Login Failure',
  props<{ error: string }>()
);

export const logoutSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'Logout Success',
);

export const logoutFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'Logout Failure',
  props<{ error: string }>()
);

export const registerSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'Register Success',
  props<{ message: string }>()
);

export const registerFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'Register Failure',
  props<{ error: string }>()
);

export const verifyEmailSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'VerifyEmail Success',
  props<{ message: string }>()
);

export const verifyEmailFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'VerifyEmail Failure',
  props<{ error: string }>()
);

export const forgotPasswordSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'ForgotPassword Success',
  props<{ message: string }>()
);

export const forgotPasswordFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'ForgotPassword Failure',
  props<{ error: string }>()
);

export const resetPasswordSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'ResetPassword Success',
  props<{ message: string }>()
);

export const resetPasswordFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'ResetPassword Failure',
  props<{ error: string }>()
);

export const refreshTokenSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'RefreshToken Success',
  props<{ account: Account }>()
);

export const refreshTokenFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'RefreshToken Failure',
  props<{ error: string }>()
);

export const validateResetTokenSuccessAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'ValidateResetToken Success',
);

export const validateResetTokenFailureAction = createAction(
  ActionSourceEnum.API,
  APIEnum.ACCOUNT,
  'ValidateResetToken Failure',
  props<{ error: string }>()
);
