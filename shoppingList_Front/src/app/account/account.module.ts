//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//#endregion

//#region Material Module
import { MatInputModule } from '@angular/material/input';
//#endregion

//#region App Module
import { AccountRoutingModule } from './account-routing.module';
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
    // Angular Module
    CommonModule,
    ReactiveFormsModule, // For Forms
    
    // Material Module
    MatInputModule,

    // App Module
    AccountRoutingModule
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