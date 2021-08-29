//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region App Action
import { createSubmitAction } from '@action_creator/creator/component-submit-action-creator';
import { ActionSource } from '@action_creator/enum/action-source.enum';
//#endregion

//#region App Model
import { Account } from '@app_model/account.model';
//#endregion


export const registerSubmit = createSubmitAction (
  ActionSource.COMPONENT,
  'Register',
  props<{
    account: Account }>()
);
