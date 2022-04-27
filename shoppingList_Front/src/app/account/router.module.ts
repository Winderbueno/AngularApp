//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#endregion

//#region Component & Page
import * as Components from './component';
//#endregion

const routes: Routes = [
  {
    path: '', component: Components.LoginComponent,
    children: [
      { path: 'login', component: Components.LoginComponent },
      { path: 'register', component: Components.RegisterComponent },
      { path: 'verify-email', component: Components.VerifyEmailComponent },
      { path: 'forgot-password', component: Components.ForgotPasswordComponent },
      { path: 'reset-password', component: Components.ResetPasswordComponent }
    ]
  },
  // Default path
  { path: '**', redirectTo: 'login' }
];


@NgModule({
    imports: [
      RouterModule.forChild(routes)],
    exports: [
      RouterModule
    ]
})
export class AccountRouterModule { }
