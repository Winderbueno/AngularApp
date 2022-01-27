//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { AccountRouterModule } from '@account/account-router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@material/material.module';
import { FormModule } from '@form/form.module';
//#endregion

//#region Store
import * as fromStore from './store/';
//#endregion

//#region Effect
import {
  AlertEffects,
  AutoLogOutEffects,
  RouterEffects,
  TimerEffects } from './effect';
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
    FlexLayoutModule,
    MaterialModule,
    FormModule,

    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey, 
      fromStore.reducer
    ),

    /* Effect */
    EffectsModule.forFeature([
      AlertEffects,
      AutoLogOutEffects,
      RouterEffects,
      TimerEffects
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
export class AccountModule {}
