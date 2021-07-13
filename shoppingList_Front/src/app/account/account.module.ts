//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region App Module
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '@app/_shared/shared.module';
//#endregion

//#region Declared Component
import { LayoutComponent,
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  VerifyEmailComponent } from './component/';
//#endregion

@NgModule({
  imports: [
    // Angular, Material Module
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,

    // App Module
    AccountRoutingModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ResetPasswordComponent
  ]
})
export class AccountModule { }
