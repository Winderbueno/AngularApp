//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region App Module
import { AccountRouterModule } from '@app_account/account-router.module';
import { MaterialModule } from '@material/material.module';
import { FormModule } from '@form/form.module';
//#endregion

//#region Effect
import { AlertEffects } from '@app_account/effect/alert.effects';
import { RouterEffects } from '@app_account/effect/router.effects';
import { TimerEffects } from '@app_account/effect/timer.effects';
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

    /* Effect */
    EffectsModule.forFeature([
      AlertEffects,
      RouterEffects,
      TimerEffects,
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
