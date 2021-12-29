//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { Account } from '@account/model/account.model';
//#endregion

export const registerSubmitAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Register',
  'Submit',
  props<{
    account: Account }>()
);
