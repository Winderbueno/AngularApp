//#region NgRx
import { props } from '@ngrx/store';
import { createComponentSubmitAction } from '@app_action/creator/component-submit-action-creator';
//#endregion

export const loginSubmit = createComponentSubmitAction (
  'Login',
  props<{
    email: string,
    password: string }>()
);

