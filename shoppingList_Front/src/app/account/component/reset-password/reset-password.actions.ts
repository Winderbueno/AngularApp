//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region App Action
import { createAction } from '@action/creator/action-creator';
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion


export const validateResetToken = createAction (
  ActionSource.COMPONENT,
  'Reset Password',
  'validateResetToken',
  props<{
    token: string | undefined }>()
);


// TODO Put this action as a standard action in Form Module
export const resetPasswordSubmit = createSubmitAction (
  ActionSource.COMPONENT,
  'Reset Password',
  props<{
    token: string | undefined,
    password: string,
    confirmPassword: string }>()
);


