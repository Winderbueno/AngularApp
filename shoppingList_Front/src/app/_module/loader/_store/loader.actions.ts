//#region Action Creator
import { props } from '@ngrx/store';
import { ActionSource } from '@app_action/enum/action-source';
import { createAction } from '@app_action/creator/action-creator';
import { Module } from '@app_action/enum/action-module';
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
