//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

export const forgotPasswordSubmitAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Forgot Password',
  'Submit',
  props<{
    email: string }>()
);
