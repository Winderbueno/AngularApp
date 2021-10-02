//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { Account } from '@account/model/account.model';
//#endregion


export const registerSubmitAction = createSubmitAction (
  ActionSource.COMPONENT,
  'Register',
  props<{
    account: Account }>()
);
