//#region Action Creator
import { props } from '@ngrx/store';
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion


export const forgotPasswordSubmit = createSubmitAction (
  ActionSource.COMPONENT,
  'Forgot Password',
  props<{
    email: string }>()
);
