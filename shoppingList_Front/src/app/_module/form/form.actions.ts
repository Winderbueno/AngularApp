//#region Action Creator
import { createSubmitAction } from '@action_creator/creator/component-submit-action-creator';
//#endregion

//#region App Action
import { ActionSource } from '@action_creator/enum/action-source.enum';
import { Module } from '@action_creator/enum/module.enum';
//#endregion

export const formSubmit = createSubmitAction (
  ActionSource.MODULE,
  Module.FORM,
);

