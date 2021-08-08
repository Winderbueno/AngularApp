//#region NgRx
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion


/* Action */
export type AccountPagesActions = Login | Register | ForgotPassword | ResetPassword | VerifyEmail;

/* Action Type */
export enum AccountPagesActionTypes {
  LOGIN = '[Account Pages] Login',
  REGISTER = '[Account Pages] Register',
  FORGOT_PASSWORD = '[Account Pages] Forgot Password',
  RESET_PASSWORD = '[Account Pages] Reset Password',
  VERIFY_EMAIL = '[Account Pages] Verify Email',
}

/* Action Definition */
export class Login implements Action {
  readonly type = AccountPagesActionTypes.LOGIN;

  // TODO - email:string, pwd:string
  constructor(public payload: { account: Update<Account> }) {}
}

export class Register implements Action {
  readonly type = AccountPagesActionTypes.REGISTER;

  constructor(public payload: { AccountId:string }) {}
}

export class ForgotPassword implements Action {
  readonly type = AccountPagesActionTypes.FORGOT_PASSWORD;

  constructor(public payload: { AccountId:string }) {}
}

export class ResetPassword implements Action {
  readonly type = AccountPagesActionTypes.RESET_PASSWORD;

  constructor(public payload: { AccountId:string }) {}
}

export class VerifyEmail implements Action {
  readonly type = AccountPagesActionTypes.VERIFY_EMAIL;

  constructor(public payload: { AccountId:string }) {}
}
