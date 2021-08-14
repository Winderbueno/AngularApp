//#region NgRx
import { props } from '@ngrx/store';
import { createComponentSubmitAction } from '@app_action/creator/component-submit-action-creator';
//#endregion


export const forgotPasswordSubmit = createComponentSubmitAction (
  'Forgot Password',
  props<{
    email: string }>()
);
