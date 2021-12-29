//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { Token } from '@token/model/token.model';
//#endregion

export const validateResetTokenAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Reset Password',
  'validateResetToken',
  props<{
    token: Token }>()
);

export const deleteResetTokenAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Reset Password',
  'deleteResetToken',
  props<{
    name: string }>()
);

// TODO Put this action as a standard action in Form Module
export const resetPasswordSubmitAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Reset Password',
  'Submit',
  props<{
    token: string | undefined,
    password: string,
    confirmPassword: string }>()
);
