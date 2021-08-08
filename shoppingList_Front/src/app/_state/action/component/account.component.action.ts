//#region NgRx
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion


/* Action */
export type AccountComponentsActions =
  Login
  | Register
  | ForgotPassword
  | ResetPassword
  | VerifyEmail;

/* Action Type */
export enum AccountComponentsActionTypes {
  LOGIN_SUBMIT = '[Login Component] Submit',
  REGISTER_SUBMIT = '[Register Component] Submit',
  FORGOT_PASSWORD_SUBMIT = '[Forgot Password Component] Submit',
  RESET_PASSWORD_SUBMIT = '[Reset Password Component] Submit',
  VERIFY_EMAIL_SUBMIT = '[Verify Email Component] Submit',
}

/* Action Definition */
export class Login implements Action {
  readonly type = AccountComponentsActionTypes.LOGIN_SUBMIT;

  // TODO - email:string, pwd:string
  constructor(public payload: {
    account: Update<Account>
  }) {}
}

export class Register implements Action {
  readonly type = AccountComponentsActionTypes.REGISTER_SUBMIT;

  constructor(public payload: {
    account: Account
  }) {}
}

export class ForgotPassword implements Action {
  readonly type = AccountComponentsActionTypes.FORGOT_PASSWORD_SUBMIT;

  constructor(public payload: {
    email: string
  }) {}
}

export class ResetPassword implements Action {
  readonly type = AccountComponentsActionTypes.RESET_PASSWORD_SUBMIT;

  constructor(public payload: {
    token: string,
    password: string,
    confirmPassword: string
  }) {}
}

export class VerifyEmail implements Action {
  readonly type = AccountComponentsActionTypes.VERIFY_EMAIL_SUBMIT;

  constructor(public payload: {
    AccountId:string
  }) {}
}
