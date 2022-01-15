//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { ReactiveFormsModule } from '@angular/forms';
import { NgrxFormsModule } from 'ngrx-forms';
import { MaterialModule } from '@material/material.module';
import { LoaderModule } from '@loader/loader.module';
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
  SubmitButtonComponent } from './component';
//#endregion

@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    ReactiveFormsModule,
    NgrxFormsModule,
    MaterialModule,
    LoaderModule,

    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey, 
      fromStore.reducer
    ),

    /* Effect */
    EffectsModule.forFeature([ValidationEffects]),
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
    SubmitButtonComponent
  ],
  exports: [
    /* Module */
    ReactiveFormsModule,
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
    SubmitButtonComponent
  ]
})
export class FormModule { }
