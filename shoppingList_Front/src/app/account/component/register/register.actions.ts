//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region App Action
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion

//#region App Model
import { Account } from '@account/model/account.model';
//#endregion


export const registerSubmit = createSubmitAction (
  ActionSource.COMPONENT,
  'Register',
  props<{
    account: Account }>()
);
