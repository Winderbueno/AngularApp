//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { AccountRouterModule } from './router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormModule } from '@form/form.module';
import { MaterialModule } from '@material/material.module';
//#endregion

//#region This
import * as Component from './component/';
import * as Effect from './effect/';
import * as Page from './page';
import * as fromStore from './store/';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    AccountRouterModule,
    FlexLayoutModule,
    FormModule,
    MaterialModule,

    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey, 
      fromStore.reducer
    ),

    /* Effect */
    EffectsModule.forFeature([
      Effect.AlertEffects,
      Effect.AutoLogoutEffects,
      Effect.RouterEffects,
      Effect.TimerEffects
    ]),
  ],
  declarations: [
    /* Page */
    Page.HomePage,
    
    /* Component */
    Component.ForgotPasswordComponent,
    Component.LoginComponent,
    Component.RegisterComponent,
    Component.ResetPasswordComponent,
    Component.VerifyEmailComponent
  ]
})
export class AccountModule {}