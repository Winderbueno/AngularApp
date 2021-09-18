//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { Token } from '@token/model/token.model';
//#endregion


export const validateEmailToken = createAction (
  ActionSource.COMPONENT,
  'Verify Email',
  'validateEmailToken',
  props<{
    token: Token }>()
);


export const deleteEmailToken = createAction (
  ActionSource.COMPONENT,
  'Verify Email',
  'deleteEmailToken',
  props<{
    name: string }>()
);


export const emailTokenValidated = createAction(
  ActionSource.COMPONENT,
  'Verify Email',
  'emailTokenValidated',
  props<{
    message: string }>()
);
