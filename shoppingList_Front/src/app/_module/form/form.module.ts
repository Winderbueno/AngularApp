//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//#region App Module
import { MaterialModule } from '@app_material/material.module';
import { LoaderModule } from '@app_loader/loader.module';
//#endregion

//#region Declared Component
import {
  CheckBoxFieldComponent,
  InputFieldComponent,
  SelectFieldComponent,
  PasswordFieldComponent,
  SubmitButtonComponent } from './component/';
//#endregion

@NgModule({
  imports: [
    // Angular, Material
    CommonModule,
    ReactiveFormsModule,

    // App Module
    MaterialModule,
    LoaderModule
  ],
  declarations: [

    // Generic Field
    CheckBoxFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,

    // Particular Field
    PasswordFieldComponent,

    SubmitButtonComponent,
  ],
  exports: [

    // Form Tools
    ReactiveFormsModule,

    // Generic Field
    CheckBoxFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,

    // Particular Field
    PasswordFieldComponent,

    SubmitButtonComponent
  ]
})
export class FormModule { }
