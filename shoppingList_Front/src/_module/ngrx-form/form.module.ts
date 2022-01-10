//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxFormsModule } from 'ngrx-forms';
//#endregion

//#region Module
import { MaterialModule } from '@material/material.module';
import { LoaderModule } from '@loader/loader.module';
//#endregion

//#region Store
import * as fromStore from './store';
//#endregion

//#region Effect
import { FormEffects } from './effect/';
//#endregion

//#region Component
import {
  CheckBoxFieldComponent,
  InputFieldComponent,
  SelectFieldComponent,
  PasswordFieldGroupComponent,
  SubmitButtonComponent } from './component';
//#endregion

@NgModule({
  imports: [
    /* Angular, Ngrx */
    CommonModule,

    /* Form Tools */
    ReactiveFormsModule,
    NgrxFormsModule,

    /* Module */
    MaterialModule,
    LoaderModule,

    /* Store */
    StoreModule.forFeature(fromStore.featureKey, fromStore.reducer),

    /* Effect */
    EffectsModule.forFeature([FormEffects]),
  ],
  declarations: [
    /* Field */
    CheckBoxFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,

    /* Field Group */
    PasswordFieldGroupComponent,

    /* Button */
    SubmitButtonComponent
  ],
  exports: [
    /* Form Tools */
    ReactiveFormsModule,
    NgrxFormsModule,

    /* Field */
    CheckBoxFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,

    /* Field Group */
    PasswordFieldGroupComponent,

    /* Button */
    SubmitButtonComponent
  ]
})
export class FormModule { }
