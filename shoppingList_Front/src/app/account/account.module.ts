//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region App Module
import { AccountRouterModule } from '@account/account-router.module';
import { MaterialModule } from '@material/material.module';
import { FormModule } from '@form/form.module';
//#endregion

//#region Effect
import {
  AccountAPIEffects,
  AlertEffects,
  RouterEffects,
  TimerEffects,
  TokenEffects } from '@account/store/';
//#endregion

//#region Component
import {
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  VerifyEmailComponent } from '@account/component/';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* App Module */
    AccountRouterModule,
    MaterialModule,
    FormModule,

    /* Effect */
    EffectsModule.forFeature([
      AccountAPIEffects,
      AlertEffects,
      RouterEffects,
      TimerEffects,
      TokenEffects,
    ]),
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
