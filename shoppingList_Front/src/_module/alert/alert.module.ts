//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@material/material.module';
//#endregion

//#region This
import * as Component from './component/';
import * as Effect from './effect/';
import * as fromStore from './store/';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    FlexLayoutModule,
    MaterialModule,

    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey, 
      fromStore.reducer
    ),

    /* Effect */
    EffectsModule.forFeature([
      Effect.AlertEffects
    ]),
  ],
  declarations: [
    Component.AlertComponent,
    Component.SnackbarComponent,
  ],
  exports: [
    Component.AlertComponent,
  ]
})
export class AlertModule { }
