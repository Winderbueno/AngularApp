//#region Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSource } from '@action/enum/action-source.enum';
import { Module } from '@action/enum/module.enum';
//#endregion

//#region App Model, Action
import { Token } from '@token/model/token.model';
//#endregion


export const storeToken = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Store',
  props<{ token: Token }>()
);


export const validateToken = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Validate',
  props<{ usage: string }>()
);


export const deleteToken = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Delete',
  props<{ name: string }>()
);


export const tokenValidated = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Validated',
  props<{
    name: string,
    timeoutHandler: number
  }>()
);


export const tokenDeleted = createAction(
  ActionSource.MODULE,
  Module.TOKEN,
  'Deleted',
  props<{ name: string | undefined }>()
);
