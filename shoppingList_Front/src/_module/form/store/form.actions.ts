//#region NgRx, Action Creator
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { Module } from '@action/enum/module.enum';
//#endregion

export const formSubmitAction = createSubmitAction (
  ActionSource.MODULE,
  Module.FORM,
);

