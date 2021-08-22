//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region App Action
import { createSubmitAction } from '@app_action/creator/component-submit-action-creator';
import { ActionSource } from '@app_action/enum/action-source';
//#endregion


export const verifyEmailSubmit = createSubmitAction (
  ActionSource.COMPONENT,
  'Verify Email',
  props<{
    token: string | undefined }>()
);
