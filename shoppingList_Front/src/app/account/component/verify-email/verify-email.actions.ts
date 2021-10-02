//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { Token } from '@token/model/token.model';
//#endregion


export const validateEmailTokenAction = createAction (
  ActionSource.COMPONENT,
  'Verify Email',
  'validateEmailToken',
  props<{
    token: Token }>()
);


export const deleteEmailTokenAction = createAction (
  ActionSource.COMPONENT,
  'Verify Email',
  'deleteEmailToken',
  props<{
    name: string }>()
);


export const emailTokenValidatedAction = createAction(
  ActionSource.COMPONENT,
  'Verify Email',
  'emailTokenValidated',
  props<{
    message: string }>()
);
