//#region NgRx
import { createAction, props } from '@ngrx/store';


import { Account } from '@app_model/account.model';

var actionType: string = "[Account API] ";

export const loginSuccess = createAction(
  actionType + 'Login Success',
  props<{ Account: Account }>()
);

export const loginFailed = createAction(
  actionType + 'Login Failed',
  props<{ Account: Account }>()
);
