//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { Account } from '../model/account.model';
//#endregion

export const loginSuccessAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'loginSuccess',
  props<{ account: Account }>()
);

export const loginFailureAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'loginFailure',
  props<{ error: string }>()
);

export const logoutSuccessAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'logoutSuccess',
);

export const logoutFailureAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'logoutFailure',
  props<{ error: string }>()
);

export const registerSuccessAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'registerSuccess',
  props<{ message: string }>()
);

export const registerFailureAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'registerFailure',
  props<{ error: string }>()
);

export const verifyEmailSuccessAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'verifyEmailSuccess',
  props<{ message: string }>()
);

export const verifyEmailFailureAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'verifyEmailFailure',
  props<{ error: string }>()
);

export const forgotPasswordSuccessAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'forgotPasswordSuccess',
  props<{ message: string }>()
);

export const forgotPasswordFailureAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'forgotPasswordFailure',
  props<{ error: string }>()
);

export const resetPasswordSuccessAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'resetPasswordSuccess',
  props<{ message: string }>()
);

export const resetPasswordFailureAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'resetPasswordFailure',
  props<{ error: string }>()
);

export const refreshTokenSuccessAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'refreshTokenSuccess',
  props<{ account: Account }>()
);

export const refreshTokenFailureAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'refreshTokenFailure',
  props<{ error: string }>()
);

export const validateResetTokenSuccessAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'validateResetTokenSuccess',
);

export const validateResetTokenFailureAction = createAction(
  ModuleEnum.Account,
  EmitterTypeEnum.Api,
  'validateResetTokenFailure',
  props<{ error: string }>()
);
