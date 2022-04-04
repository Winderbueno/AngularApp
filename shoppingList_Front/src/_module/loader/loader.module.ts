//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region Module
import { MaterialModule } from '@material/material.module';
//#endregion

//#region This
import * as Components from './component';
import * as fromStore from './store';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    MaterialModule,

    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey, 
      fromStore.reducer
    ),
  ],
  declarations: [
    Components.Components,
  ],
  exports: [
    Components.Components,
  ]
})
export class LoaderModule { }
