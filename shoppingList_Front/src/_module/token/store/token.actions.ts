//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

//#region Model
import { Token } from '../model/token.model';
//#endregion

export const validateTokenAction = createAction(
  ModuleEnum.TOKEN,
  EmitterTypeEnum.STORE,
  'validateToken',
  props<{ token: Token }>()
);

export const deleteTokenAction = createAction(
  ModuleEnum.TOKEN,
  EmitterTypeEnum.STORE,
  'deleteToken',
  props<{ name: string }>()
);

export const tokenValidatedAction = createAction(
  ModuleEnum.TOKEN,
  EmitterTypeEnum.STORE,
  'tokenValidated',
  props<{ name: string }>()
);

export const tokenInvalidatedAction = createAction(
  ModuleEnum.TOKEN,
  EmitterTypeEnum.STORE,
  'tokenInvalidated',
  props<{ name: string }>()
);