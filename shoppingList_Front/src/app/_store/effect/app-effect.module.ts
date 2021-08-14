//#region Angular & Material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region NgRx Module
import { EffectsModule } from '@ngrx/effects';

//#region Effects
import {
  LoginEffects,
  ForgotPasswordEffects,
  LogoutEffects,
  RegisterEffects,
  ResetPasswordEffects } from '@app_effect/account/.';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    //CommonModule,

    EffectsModule.forFeature([
      LoginEffects,
      ForgotPasswordEffects,
      LogoutEffects,
      RegisterEffects,
      ResetPasswordEffects
    ])
  ],
  declarations: []
})
export class AppEffectsModule { }
