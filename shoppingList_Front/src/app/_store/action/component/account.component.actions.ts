//#region NgRx
import { createAction, props } from '@ngrx/store';
import { createComponentAction } from '@app_action/action-creator';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion


export const loginSubmit = createComponentAction (
  'Login', 'Submit',
  props<{
    email: string,
    password: string }>()
);

export const registerSubmit = createComponentAction (
  'Register', 'Submit',
  props<{
    account: Account }>()
);


export const forgotPasswordSubmit = createComponentAction (
  'Forgot Password', 'Submit',
  props<{
    email: string }>()
);


export const resetPasswordSubmit = createComponentAction (
  'Reset Password', 'Submit',
  props<{
    token: string,
    password: string,
    confirmPassword: string }>()
);


export const verifyEmailSubmit = createComponentAction (
  'Verify Email', 'Submit',
  props<{
    token: string }>()
);


export const toolbarLogOut = createComponentAction (
  'ToolBar', 'Logout');
