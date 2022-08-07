//#region Angular
import { ComponentType } from '@angular/cdk/portal';
//#endregion

//#region NgRx, Action Creator
import { props } from '@ngrx/store';
import { createAction } from '@action/creator/action-creator';
import { ModuleEnum } from '@action/model/module.enum';
import { EmitterTypeEnum } from '@action/model/emitter-type.enum';
import { MatDialogConfig } from '@angular/material/dialog';
//#endregion


export const openDialogAction = createAction(
  ModuleEnum.Dialog,
  EmitterTypeEnum.Store,
  'openDialog',
  props<{
    component: ComponentType<any>,
    config?: MatDialogConfig<any>
  }>()
);

export const closeDialogAction = createAction(
  ModuleEnum.Dialog,
  EmitterTypeEnum.Store,
  'closeDialog'
);