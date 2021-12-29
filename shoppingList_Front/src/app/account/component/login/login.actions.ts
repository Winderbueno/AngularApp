//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

export const loginSubmitAction = createAction (
  ActionSourceEnum.COMPONENT,
  'Login',
  'Submit',
  props<{
    email: string,
    password: string }>()
);

