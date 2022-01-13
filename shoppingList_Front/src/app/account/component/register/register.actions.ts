//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { EmitterTypeEnum } from '@module/action/enum/emitter-type.enum';
import { ModuleEnum } from '@module/action/enum/module.enum';
//#endregion

//#region Model
import { Account } from '@account/model/account.model';
//#endregion

export const registerSubmitAction = createAction (
  ModuleEnum.ACCOUNT,
  EmitterTypeEnum.COMPONENT,
  'registerSubmit',
  props<{ account: Account }>()
);
