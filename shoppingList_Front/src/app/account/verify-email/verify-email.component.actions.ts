//#region NgRx
import { props } from '@ngrx/store';
import { createComponentSubmitAction } from '@app_action/creator/component-submit-action-creator';
//#endregion


export const verifyEmailSubmit = createComponentSubmitAction (
  'Verify Email',
  props<{
    token: string }>()
);
