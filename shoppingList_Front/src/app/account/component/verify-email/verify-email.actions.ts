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
