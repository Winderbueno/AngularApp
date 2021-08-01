//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_shared/material/material.module';
//#endregion

//#region App Module
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '@app_shared/shared.module';
import { FormModule } from '@app_form/form.module';
//#endregion

//#region Declared Component
import {
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  VerifyEmailComponent } from './component/';
//#endregion


@NgModule({
  imports: [
    // Angular, Material
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
