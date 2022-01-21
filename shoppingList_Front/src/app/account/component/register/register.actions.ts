//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/enum/module.enum';
import { EmitterTypeEnum } from '@action/enum/emitter-type.enum';
//#endregion

//#region Model
import { Account } from '../../model/account.model';
//#endregion

export const registerSubmitAction = createAction (
  ModuleEnum.Account,
  EmitterTypeEnum.Component,
  'registerSubmit',
  props<{ account: Account }>()
);