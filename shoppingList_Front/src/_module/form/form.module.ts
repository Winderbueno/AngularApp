//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderModule } from '@loader/loader.module';
import { MaterialModule } from '@material/material.module';
import { NgrxFormsModule } from 'ngrx-forms';
//#endregion

//#region This
import * as Components from './component';
import * as Directives from './directive';
import * as Effects from './effect';
import * as fromStore from './store';
//#endregion

@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    FlexLayoutModule,
    LoaderModule,
    MaterialModule,
    NgrxFormsModule,

    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey, 
      fromStore.reducer
    ),

    /* Effect */
    EffectsModule.forFeature([
      Effects.FormValidationEffects
    ]),
  ],
  declarations: [
    Components.Components,
    Directives.FormDirectives
  ],
  exports: [
    Components.Components,
    Directives.FormDirectives
  ]
})
export class FormModule { }
