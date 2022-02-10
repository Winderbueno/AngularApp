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
    LoaderModule,
    MaterialModule,
    NgrxFormsModule,

    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey, 
      fromStore.reducer
    ),

    EffectsModule.forFeature([
      Effect.ValidationEffects
    ]),
  ],
  declarations: [
    /* Button */
    Component.ButtonComponent,
    Component.SlideToggleButtonComponent,

    /* Field */
    Component.ButtonToggleFieldComponent,
    Component.CheckBoxFieldComponent,
    Component.DateFieldComponent,
    Component.InputFieldComponent,
    Component.RadioButtonFieldComponent,
    Component.SelectFieldComponent,
    Component.SlideToggleFieldComponent,
    Component.SliderFieldComponent,

    /* Field Group */
    Component.PasswordFieldGroupComponent
  ],
  exports: [
    /* Module */
    NgrxFormsModule,

    /* Button */
    Component.ButtonComponent,
    Component.SlideToggleButtonComponent,

    /* Field */
    Component.ButtonToggleFieldComponent,
    Component.CheckBoxFieldComponent,
    Component.DateFieldComponent,
    Component.InputFieldComponent,
    Component.RadioButtonFieldComponent,
    Component.SelectFieldComponent,
    Component.SlideToggleFieldComponent,
    Component.SliderFieldComponent,

    /* Field Group */
    Component.PasswordFieldGroupComponent
  ]
})
export class FormModule { }
