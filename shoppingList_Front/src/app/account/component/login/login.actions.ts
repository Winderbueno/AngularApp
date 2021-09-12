//#region NgRx
import { props } from '@ngrx/store';
//#endregion

//#region Action Creator
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
//#endregion


export const loginSubmit = createSubmitAction (
  ActionSource.COMPONENT,
  'Login',
  props<{
    email: string,
    password: string }>()
);

