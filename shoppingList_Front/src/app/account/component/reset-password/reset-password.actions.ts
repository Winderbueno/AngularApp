//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { Token } from '@token/model/token.model';
//#endregion


export const validateResetTokenAction = createAction (
  ActionSource.COMPONENT,
  'Reset Password',
  'validateResetToken',
  props<{
    token: Token }>()
);


export const deleteResetTokenAction = createAction (
  ActionSource.COMPONENT,
  'Reset Password',
  'deleteResetToken',
  props<{
    name: string }>()
);


// TODO Put this action as a standard action in Form Module
export const resetPasswordSubmitAction = createSubmitAction (
  ActionSource.COMPONENT,
  'Reset Password',
  props<{
    token: string | undefined,
    password: string,
    confirmPassword: string }>()
);


