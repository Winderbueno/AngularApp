//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app_shared/module/material.module';
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
    MaterialModule
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
