//#region Action Creator
import { props } from '@ngrx/store';
import { ActionSource } from '@app_action/enum/action-source.enum';
import { createAction } from '@app_action/creator/action-creator';
import { Module } from '@app_action/enum/module.enum';
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
