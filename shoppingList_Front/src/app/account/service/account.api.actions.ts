//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@module/action/enum/module.enum';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
//#endregion

//#region Model
import { Account } from '@account/model/account.model';
//#endregion

export const loginSuccessAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'loginSuccess',
  props<{ account: Account }>()
);

export const loginFailureAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'loginFailure',
  props<{ error: string }>()
);

export const logoutSuccessAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'logoutSuccess',
);

export const logoutFailureAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'logoutFailure',
  props<{ error: string }>()
);

export const registerSuccessAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'registerSuccess',
  props<{ message: string }>()
);

export const registerFailureAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'registerFailure',
  props<{ error: string }>()
);

export const verifyEmailSuccessAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'verifyEmailSuccess',
  props<{ message: string }>()
);

export const verifyEmailFailureAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'verifyEmailFailure',
  props<{ error: string }>()
);

export const forgotPasswordSuccessAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'forgotPasswordSuccess',
  props<{ message: string }>()
);

export const forgotPasswordFailureAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'forgotPasswordFailure',
  props<{ error: string }>()
);

export const resetPasswordSuccessAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'resetPasswordSuccess',
  props<{ message: string }>()
);

export const resetPasswordFailureAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'resetPasswordFailure',
  props<{ error: string }>()
);

export const refreshTokenSuccessAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'refreshTokenSuccess',
  props<{ account: Account }>()
);

export const refreshTokenFailureAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'refreshTokenFailure',
  props<{ error: string }>()
);

export const validateResetTokenSuccessAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'validateResetTokenSuccess',
);

export const validateResetTokenFailureAction = createAction(
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.API,
  'validateResetTokenFailure',
  props<{ error: string }>()
);