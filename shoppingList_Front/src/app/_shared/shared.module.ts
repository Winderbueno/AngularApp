//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region Declared Component
import { AlertComponent } from '@app_alert/component/alert/alert.component';
import { SnackbarComponent } from '@app_alert/component/snackbar/snackbar.component';
import { PasswordFieldComponent } from './form/component/password-field/password-field.component';
import { EmailFieldComponent } from './form/component/email-field/email-field.component';
import { FormComponent } from './form/component/form.component';
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
    // Alert
    AlertComponent,
    SnackbarComponent,

    // Form
    FormComponent,
    PasswordFieldComponent,
    EmailFieldComponent
  ],
  exports: [
    AlertComponent,
    PasswordFieldComponent,
    EmailFieldComponent
  ]
})
export class SharedModule { }
