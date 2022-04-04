/* Action */
export { emailTokenValidatedAction } from './verify-email/verify-email.actions';

/* Component */
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

export const Components = [
  ForgotPasswordComponent,
  LoginComponent,
  RegisterComponent,
  ResetPasswordComponent,
  VerifyEmailComponent
];

export { 
  ForgotPasswordComponent, 
  LoginComponent,
  RegisterComponent,
  ResetPasswordComponent,
  VerifyEmailComponent
};
