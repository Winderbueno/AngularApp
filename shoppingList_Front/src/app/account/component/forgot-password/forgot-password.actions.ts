//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion


export const forgotPasswordSubmitAction = createSubmitAction (
  ActionSourceEnum.COMPONENT,
  'Forgot Password',
  props<{
    email: string }>()
);
