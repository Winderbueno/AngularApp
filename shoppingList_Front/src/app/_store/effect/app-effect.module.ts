//#region Angular & Material
import { NgModule } from '@angular/core';
//#endregion

//#region NgRx Module
import { EffectsModule } from '@ngrx/effects';

//#region Effects
import {
  ForgotPasswordEffects,
  LoginEffects,
  LogoutEffects,
  RefreshTokenEffects,
  RegisterEffects,
  ResetPasswordEffects,
  ValidateResetTokenEffects,
  VerifyEmailEffects} from '@app_effect/account/.';
//#endregion


@NgModule({
  imports: [
    /* Account Feature */
    EffectsModule.forFeature([
      ForgotPasswordEffects,
      LoginEffects,
      LogoutEffects,
      RefreshTokenEffects,
      RegisterEffects,
      ResetPasswordEffects,
      ValidateResetTokenEffects,
      VerifyEmailEffects
    ])
  ],
  declarations: []
})
export class AppEffectsModule { }
