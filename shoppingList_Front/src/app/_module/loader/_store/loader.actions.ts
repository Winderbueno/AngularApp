//#region Action Creator
import { props } from '@ngrx/store';
import { ActionSource } from '@action_creator/enum/action-source.enum';
import { createAction } from '@action_creator/creator/action-creator';
import { Module } from '@action_creator/enum/module.enum';
//#endregion


export const startLoader = createAction(
  ActionSource.MODULE,
  Module.LOADER,
  'Start',
  props<{ loaderTrigger: string }>()
);


export const stopLoader = createAction(
  ActionSource.MODULE,
  Module.LOADER,
  'Stop',
);
