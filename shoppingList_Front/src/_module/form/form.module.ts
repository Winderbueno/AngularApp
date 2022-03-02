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

    EffectsModule.forFeature([
      Effects.FormValidationEffects
    ]),
  ],
  declarations: [
    /* Button */
    Components.ButtonComponent,
    Components.SlideToggleButtonComponent,

    /* Field */
    Components.ButtonToggleFieldComponent,
    Components.CheckBoxFieldComponent,
    Components.DateFieldComponent,
    Components.InputChipFieldComponent,
    Components.InputFieldComponent,
    Components.RadioButtonFieldComponent,
    Components.SelectFieldComponent,
    Components.SlideToggleFieldComponent,
    Components.SliderFieldComponent,

    /* Field Group */
    Components.PasswordFieldGroupComponent
  ],
  exports: [
    /* Module */
    NgrxFormsModule,

    /* Button */
    Components.ButtonComponent,
    Components.SlideToggleButtonComponent,

    /* Field */
    Components.ButtonToggleFieldComponent,
    Components.CheckBoxFieldComponent,
    Components.DateFieldComponent,
    Components.InputChipFieldComponent,
    Components.InputFieldComponent,
    Components.RadioButtonFieldComponent,
    Components.SelectFieldComponent,
    Components.SlideToggleFieldComponent,
    Components.SliderFieldComponent,

    /* Field Group */
    Components.PasswordFieldGroupComponent
  ]
})
export class FormModule { }
