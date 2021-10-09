//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion


export const loginSubmitAction = createSubmitAction (
  ActionSourceEnum.COMPONENT,
  'Login',
  props<{
    email: string,
    password: string }>()
);

