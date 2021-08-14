//#region NgRx
import { props } from '@ngrx/store';
import { createComponentSubmitAction } from '@app_action/creator/component-submit-action-creator';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion


export const registerSubmit = createComponentSubmitAction (
  'Register',
  props<{
    account: Account }>()
);
