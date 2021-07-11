//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region Declared Component
import { AlertComponent } from '@app_alert/component/alert/alert.component';
import { SnackbarComponent } from '@app_alert/component/snackbar/snackbar.component';
import { PasswordFieldComponent } from './form/component/field-password/password-field.component';
import { FormComponent } from './form/component/form.component';
//#endregion

@NgModule({
  imports: [
    // Angular, Material Module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    AlertComponent,
    SnackbarComponent,
    PasswordFieldComponent,
    FormComponent,
  ],
  exports: [
    AlertComponent,
    PasswordFieldComponent
  ]
})
export class SharedModule { }
