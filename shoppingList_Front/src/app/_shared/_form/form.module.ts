//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region Declared Component
import {
  PasswordFieldComponent,
  InputFieldComponent,
  SelectFieldComponent,
  SubmitButtonComponent,
  FormComponent } from './component/';
//#endregion

@NgModule({
  imports: [
    // Angular, Material
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    // Text Field
    PasswordFieldComponent,

    // Field Type
    InputFieldComponent,
    SelectFieldComponent,

    SubmitButtonComponent,
    FormComponent
  ],
  exports: [
    PasswordFieldComponent,

    // Field Type
    InputFieldComponent,
    SelectFieldComponent,

    SubmitButtonComponent,
    FormsModule,

    ReactiveFormsModule,
  ]
})
export class FormModule { }
