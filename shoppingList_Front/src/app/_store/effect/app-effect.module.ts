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
  ResetPasswordEffects } from '@app_effect/account/.';
//#endregion


@NgModule({
  imports: [
    /* Account Feature */
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
