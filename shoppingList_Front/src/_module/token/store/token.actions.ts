//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { Module } from '@action/enum/module.enum';
//#endregion

//#region Model
import { Token } from '../model/token.model';
//#endregion


export const validateTokenAction = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Validate',
  props<{ token: Token }>()
);


export const deleteTokenAction = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Delete',
  props<{ name: string }>()
);


export const tokenValidatedAction = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Validated',
  props<{ name: string }>()
);


export const tokenInvalidatedAction = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Invalidated',
  props<{ name: string }>()
);
