//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { Module } from '@action/enum/module.enum';
//#endregion

//#region App Model, Action
import { Token } from '../model/token.model';
//#endregion


export const validateToken = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Validate',
  props<{ token: Token }>()
);


export const tokenValidated = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Validated',
  props<{ name: string }>()
);


export const tokenInvalidated = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Invalidated',
  props<{ name: string }>()
);


export const deleteToken = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Delete',
  props<{ name: string }>()
);
