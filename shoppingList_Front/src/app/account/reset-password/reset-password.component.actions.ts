//#region NgRx
import { props } from '@ngrx/store';
import { createComponentSubmitAction } from '@app_action/creator/component-submit-action-creator';
import { createComponentAction } from '@app_action/creator/by-source/component-action-creator';
//#endregion


export const validateResetToken = createComponentAction (
  'Reset Password', 'validateResetToken',
  props<{
    token: string }>()
);


export const resetPasswordSubmit = createComponentSubmitAction (
  'Reset Password',
  props<{
    token: string,
    password: string,
    confirmPassword: string }>()
);


