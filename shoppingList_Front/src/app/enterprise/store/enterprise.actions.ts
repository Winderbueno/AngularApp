//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
//#endregion

//#region This
import { IncomeTaxRow } from '../model/income-tax-row.model';
//#endregion

export const incomeTaxComputedAction = createAction(
  ModuleEnum.Enterprise,
  EmitterTypeEnum.Store,
  'incomeTaxComputed',
  props<{ dataSource: IncomeTaxRow[] }>()
);
