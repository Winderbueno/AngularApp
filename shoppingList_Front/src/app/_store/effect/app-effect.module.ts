//#region Angular & Material
import { NgModule } from '@angular/core';
//#endregion

//#region NgRx Module
import { EffectsModule } from '@ngrx/effects';

//#region Effects
import {
  LoginEffects,
  ForgotPasswordEffects,
  LogoutEffects,
  RegisterEffects,
  ResetPasswordEffects,
  VerifyEmailEffects} from '@app_effect/account/.';
//#endregion


@NgModule({
  imports: [
    /* Account Feature */
    EffectsModule.forFeature([
      LoginEffects,
      ForgotPasswordEffects,
      LogoutEffects,
      RegisterEffects,
      ResetPasswordEffects,
      VerifyEmailEffects
    ])
  ],
  declarations: []
})
export class AppEffectsModule { }
