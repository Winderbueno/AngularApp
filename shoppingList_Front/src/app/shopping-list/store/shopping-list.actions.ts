//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { Module } from '@action/enum/module.enum';
//#endregion


export const loadActiveAction = createAction (
  ActionSource.MODULE,
  Module.SHOPPING_LIST,
  'LoadActive'
);
