//#region Action Creator
import { props } from '@ngrx/store';
import { ActionSource } from '@action/enum/action-source.enum';
import { createAction } from '@action/creator/action-creator';
import { Module } from '@action/enum/module.enum';
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
