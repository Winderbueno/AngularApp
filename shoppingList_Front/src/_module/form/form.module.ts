//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { LoaderModule } from '@loader/loader.module';
import { MaterialModule } from '@material/material.module';
import { NgrxFormsModule } from 'ngrx-forms';
//#endregion

//#region Store
import * as fromStore from './store';
//#endregion

//#region Effect
import { ValidationEffects } from './effect/';
//#endregion

//#region Component
import {
  CheckBoxFieldComponent,
  DateFieldComponent,
  InputFieldComponent,
  SelectFieldComponent,
  SlideToggleFieldComponent,
  PasswordFieldGroupComponent,
  ButtonComponent } from './component';
//#endregion

@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    LoaderModule,
    MaterialModule,
    NgrxFormsModule,

    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey, 
      fromStore.reducer
    ),

    EffectsModule.forFeature([
      ValidationEffects
    ]),
  ],
  declarations: [
    /* Field */
    CheckBoxFieldComponent,
    DateFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,
    SlideToggleFieldComponent,

    /* Field Group */
    PasswordFieldGroupComponent,

    /* Button */
    ButtonComponent
  ],
  exports: [
    /* Module */
    NgrxFormsModule,

    /* Field */
    CheckBoxFieldComponent,
    DateFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,
    SlideToggleFieldComponent,

    /* Field Group */
    PasswordFieldGroupComponent,

    /* Button */
    ButtonComponent
  ]
})
export class FormModule { }
