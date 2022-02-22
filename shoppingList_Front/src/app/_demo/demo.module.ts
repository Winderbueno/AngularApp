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
import * as Components from './component/';
import * as Effects from './effect/';
import * as Pages from './page';
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
      Effects.AlertEffects,
      Effects.FormEffects,
      Effects.LoaderEffects,
      Effects.TimerEffects
    ]),
  ],
  declarations: [
    /* Page */
    Pages.HomePage,

    /* Component */
    Components.AlertComponent,
    Components.FormComponent,
    Components.LoaderComponent,
    Components.TechStackComponent
  ],
  exports: [
    Pages.HomePage
  ]
})
export class DemoModule { }