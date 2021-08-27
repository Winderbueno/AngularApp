//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//#endregion

//#region App Module
import { MaterialModule } from '@app_material/material.module';
import { LoaderModule } from '@app_loader/loader.module';
//#endregion

//#region Component
import {
  CheckBoxFieldComponent,
  InputFieldComponent,
  SelectFieldComponent,
  PasswordFieldGroupComponent,
  SubmitButtonComponent } from './component/';
//#endregion

@NgModule({
  imports: [
    /* Angular */
    CommonModule,
    ReactiveFormsModule,

    /* App Module */
    MaterialModule,
    LoaderModule
  ],
  declarations: [

    // Field
    CheckBoxFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,

    // Field Group
    PasswordFieldGroupComponent,

    SubmitButtonComponent,
  ],
  exports: [

    // Form Tools
    ReactiveFormsModule,

    // Field
    CheckBoxFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,

    // Field Group
    PasswordFieldGroupComponent,

    SubmitButtonComponent
  ]
})
export class FormModule { }
