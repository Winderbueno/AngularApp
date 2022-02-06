//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#endregion

//#region Component & Page
import * as Component from './component/';
import * as Page from './page';
//#endregion

const routes: Routes = [
  {
    path: '', component: Page.HomePage,
    children: [
      { path: 'login', component: Component.LoginComponent },
      { path: 'register', component: Component.RegisterComponent },
      { path: 'verify-email', component: Component.VerifyEmailComponent },
      { path: 'forgot-password', component: Component.ForgotPasswordComponent },
      { path: 'reset-password', component: Component.ResetPasswordComponent }
    ]
  },
  // Otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [
      RouterModule.forChild(routes)],
    exports: [
      RouterModule
    ]
})
export class AccountRouterModule { }
