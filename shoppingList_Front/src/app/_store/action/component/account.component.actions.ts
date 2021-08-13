//#region NgRx
import { props } from '@ngrx/store';
import { createComponentAction, createComponentSubmitAction } from '@app_action/action-creator';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion


export const loginSubmit = createComponentSubmitAction (
  'Login',
  props<{
    email: string,
    password: string }>()
);


export const registerSubmit = createComponentSubmitAction (
  'Register',
  props<{
    account: Account }>()
);


export const forgotPasswordSubmit = createComponentSubmitAction (
  'Forgot Password',
  props<{
    email: string }>()
);


export const resetPasswordSubmit = createComponentSubmitAction (
  'Reset Password',
  props<{
    token: string,
    password: string,
    confirmPassword: string }>()
);


export const verifyEmailSubmit = createComponentSubmitAction (
  'Verify Email',
  props<{
    token: string }>()
);


export const toolbarLogOut = createComponentAction (
  'ToolBar', 'Logout');
