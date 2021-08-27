//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region App Module
import { AccountRouterModule } from '@app_account/account-router.module';
import { MaterialModule } from '@app_material/material.module';
import { FormModule } from '@app_form/form.module';
//#endregion

//#region Component
import {
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  VerifyEmailComponent } from '@app_account/component/.';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* App Module */
    AccountRouterModule,
    MaterialModule,
    FormModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ResetPasswordComponent
  ]
})
export class AccountModule { }
