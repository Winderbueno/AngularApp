//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { Token } from '@token/model/token.model';
//#endregion

export const validateEmailTokenAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Verify Email',
  'validateEmailToken',
  props<{
    token: Token }>()
);

export const deleteEmailTokenAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Verify Email',
  'deleteEmailToken',
  props<{
    name: string }>()
);

export const emailTokenValidatedAction = createAction(
  ActionSourceEnum.COMPONENT,
  'Verify Email',
  'emailTokenValidated',
  props<{
    message: string }>()
);
