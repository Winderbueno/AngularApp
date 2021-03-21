//#region Angular Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#endregion

//#region Main Content View
import { NgHomeComponent } from './_shared/component/ng-home/ng-home.component';
import { LoginComponent } from './_shared/component/login/login.component';
import { ShoppingListComponent } from './shopping-list/component/shopping-list/shopping-list.component';
//#endregion

// Service
import { AuthGuard } from './_shared/_security/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/ng-home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ng-home', component: NgHomeComponent },
  { path: 'my-shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
