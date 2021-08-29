//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region App Action
import { createSubmitAction } from '@action_creator/creator/component-submit-action-creator';
import { ActionSource } from '@action_creator/enum/action-source.enum';
//#endregion


export const forgotPasswordSubmit = createSubmitAction (
  ActionSource.COMPONENT,
  'Forgot Password',
  props<{
    email: string }>()
);
