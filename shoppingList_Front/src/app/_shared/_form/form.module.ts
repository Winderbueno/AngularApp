//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region Declared Component
import {
  PasswordFieldComponent,
  EmailFieldComponent,
  SelectTypeFieldComponent,
  SubmitButtonComponent,
  FormComponent } from './component/';
//#endregion

@NgModule({
  imports: [
    // Angular, Material Module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    // Text Field
    PasswordFieldComponent,
    EmailFieldComponent,

    // Field Type
    SelectTypeFieldComponent,

    SubmitButtonComponent,
    FormComponent
  ],
  exports: [
    PasswordFieldComponent,
    EmailFieldComponent,
    SelectTypeFieldComponent,
    SubmitButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
