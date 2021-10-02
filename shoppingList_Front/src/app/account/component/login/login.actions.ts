//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion


export const loginSubmitAction = createSubmitAction (
  ActionSource.COMPONENT,
  'Login',
  props<{
    email: string,
    password: string }>()
);

