//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ActionSourceEnum } from '@action/enum/action-source.enum';
//#endregion

//#region Model
import { ModuleEnum } from '@app/model/enum/module.enum';
import { Token } from '../model/token.model';
//#endregion

export const validateTokenAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TOKEN,
  'Validate',
  props<{ token: Token }>()
);

export const deleteTokenAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TOKEN,
  'Delete',
  props<{ name: string }>()
);

export const tokenValidatedAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TOKEN,
  'Validated',
  props<{ name: string }>()
);

export const tokenInvalidatedAction = createAction(
  ActionSourceEnum.MODULE,
  ModuleEnum.TOKEN,
  'Invalidated',
  props<{ name: string }>()
);
