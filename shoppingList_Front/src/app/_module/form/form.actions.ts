//#region Action Creator
import { createSubmitAction } from '@action/creator/component-submit-action-creator';
//#endregion

//#region App Action
import { ActionSource } from '@action/enum/action-source.enum';
import { Module } from '@action/enum/module.enum';
//#endregion

export const formSubmit = createSubmitAction (
  ActionSource.MODULE,
  Module.FORM,
);

