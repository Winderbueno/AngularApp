//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region Model
import { Token } from '../model/token.model';
//#endregion

export const deleteTokenAction = createAction(
  ModuleEnum.Token,
  EmitterTypeEnum.Store,
  'deleteToken',
  props<{ tokenId: string }>()
);

export const tokenInvalidatedAction = createAction(
  ModuleEnum.Token,
  EmitterTypeEnum.Store,
  'tokenInvalidated',
  props<{ tokenId: string }>()
);

export const tokenValidatedAction = createAction(
  ModuleEnum.Token,
  EmitterTypeEnum.Store,
  'tokenValidated',
  props<{ tokenId: string }>()
);

export const validateTokenAction = createAction(
  ModuleEnum.Token,
  EmitterTypeEnum.Store,
  'validateToken',
  props<{ token: Token }>()
);