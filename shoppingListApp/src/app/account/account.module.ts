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
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
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