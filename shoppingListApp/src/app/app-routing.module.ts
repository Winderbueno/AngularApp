//#region Angular Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#endregion

//#region Main Content View
import { ShoppingListComponent } from './shopping-list/component/shopping-list/shopping-list.component';
import { AppNgHomeComponent } from './_shared/component/app-ng-home/app-ng-home.component';
import { LoginComponent } from './_shared/component/login/login.component';
//#endregion

const routes: Routes = [
  { path: '', redirectTo: '/my-shopping-list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ang-app-home-tmplt', component: AppNgHomeComponent },
  { path: 'my-shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
