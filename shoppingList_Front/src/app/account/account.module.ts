//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region App Module
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '@app/_shared/shared.module';
//#endregion

//#region Declared Component
import {
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  VerifyEmailComponent } from './component/';
import { FormModule } from '@app_form/form.module';
//#endregion

@NgModule({
  imports: [
    // Angular, Material Module
    CommonModule,
    MaterialModule,

    // App Module
    AccountRoutingModule,
    SharedModule,
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
