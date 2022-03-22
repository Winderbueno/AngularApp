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
import * as Components from './component/';
import * as Effects from './effect/';
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

    /* Effect */
    EffectsModule.forFeature([
      Effects.FormValidationEffects
    ]),
  ],
  declarations: [
    /* Button */
    Components.BasicButtonComponent,
    Components.IconButtonComponent,
    Components.SlideToggleButtonComponent,

    /* Field */
    Components.ButtonToggleFieldComponent,
    Components.CheckBoxFieldComponent,
    Components.DateFieldComponent,
    Components.InputFieldComponent,
    Components.RadioButtonFieldComponent,
    Components.SelectFieldComponent,
    Components.SlideToggleFieldComponent,
    Components.SliderFieldComponent,

    /* Field Group */
    Components.PasswordFieldGroupComponent,

    /* Form */
    Components.FormComponent
  ],
  exports: [
    /* Button */
    Components.BasicButtonComponent,
    Components.SlideToggleButtonComponent,
    Components.IconButtonComponent,

    /* Field */
    Components.ButtonToggleFieldComponent,
    Components.CheckBoxFieldComponent,
    Components.DateFieldComponent,
    Components.InputFieldComponent,
    Components.RadioButtonFieldComponent,
    Components.SelectFieldComponent,
    Components.SlideToggleFieldComponent,
    Components.SliderFieldComponent,

    /* Field Group */
    Components.PasswordFieldGroupComponent,

    /* Form */
    Components.FormComponent
  ]
})
export class FormModule { }
