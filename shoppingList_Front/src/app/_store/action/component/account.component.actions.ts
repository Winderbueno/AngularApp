//#region NgRx
import { createAction, props } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion


/* Action Type */
export enum AccountComponentsActionTypes {
  LOGIN_SUBMIT = '[Login Component] Submit',
  REGISTER_SUBMIT = '[Register Component] Submit',
  FORGOT_PASSWORD_SUBMIT = '[Forgot Password Component] Submit',
  RESET_PASSWORD_SUBMIT = '[Reset Password Component] Submit',
  VERIFY_EMAIL_SUBMIT = '[Verify Email Component] Submit',
  TOOLBAR_LOGOUT = '[Toolbar Component] LogOut',
}


export const loginSubmit = createAction(
  AccountComponentsActionTypes.LOGIN_SUBMIT,
  props<{
    email: string,
    password: string }>());


export const registerSubmit = createAction(
  AccountComponentsActionTypes.REGISTER_SUBMIT,
  props<{
    account: Account }>());


export const forgotPasswordSubmit = createAction(
  AccountComponentsActionTypes.FORGOT_PASSWORD_SUBMIT,
  props<{
    email: string }>());


export const resetPasswordSubmit = createAction(
  AccountComponentsActionTypes.RESET_PASSWORD_SUBMIT,
  props<{
    token: string,
    password: string,
    confirmPassword: string }>());


export const verifyEmailSubmit = createAction(
  AccountComponentsActionTypes.VERIFY_EMAIL_SUBMIT,
  props<{
    token: string }>());


export const toolbarLogOut = createAction(
  AccountComponentsActionTypes.TOOLBAR_LOGOUT);