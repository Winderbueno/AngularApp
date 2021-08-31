//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region App Action
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion


export const verifyEmailSubmit = createSubmitAction (
  ActionSource.COMPONENT,
  'Verify Email',
  props<{
    token: string | undefined }>()
);
