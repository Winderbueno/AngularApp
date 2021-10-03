//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
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
  TokenEffects } from './effect';
//#endregion

//#region Component
import {
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  VerifyEmailComponent } from './component/';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    AccountRouterModule,
    MaterialModule,
    FormModule,

    /* Store */
    //StoreModule.forFeature(), // TODO

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
