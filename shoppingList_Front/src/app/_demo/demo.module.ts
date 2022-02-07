//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormModule } from '@form/form.module';
import { MaterialModule } from '@material/material.module';
//#endregion

//#region This
import * as Component from './component/';
import * as Effect from './effect/';
import * as Page from './page';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    FlexLayoutModule,
    FormModule,
    MaterialModule,

    /* Effect */
    EffectsModule.forFeature([
      Effect.AlertEffects,
    ]),
  ],
  declarations: [
    /* Page */
    Page.HomePage,

    /* Component */
    Component.AlertComponent,
    Component.ContentComponent,
    Component.FormComponent,
    Component.LoaderComponent
  ],
  exports: [
    Page.HomePage
  ]
})
export class DemoModule { }