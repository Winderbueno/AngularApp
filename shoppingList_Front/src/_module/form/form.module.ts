//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
    RouterModule, // TODO - Used for k-link-router -> to put in @button module

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
    EffectsModule.forFeature(
      Effects.Effects
    ),
  ],
  declarations: [
    Components.Components,
    Directives.Directives
  ],
  exports: [
    Components.Components,
    Directives.Directives
  ]
})
export class FormModule { }
