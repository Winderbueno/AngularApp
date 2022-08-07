//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { MaterialModule } from '@material/material.module';
//#endregion

//#region This
import * as Components from './component';
import * as Effects from './effect';
//#endregion

@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    MaterialModule,

    /* Effect */
    EffectsModule.forFeature(
      Effects.Effects
    ),
  ],
  declarations: [
    Components.Components
  ],
  exports: [
    Components.Components,
  ]
})
export class DialogModule { }
