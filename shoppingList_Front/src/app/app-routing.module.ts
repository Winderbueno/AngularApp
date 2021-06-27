//#region Angular Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#endregion

//#region Routed Component
import { NgHomeComponent } from '@app_layout/component/ng-home/ng-home.component';
import { ShoppingListComponent } from '@app/shopping-list/component/shopping-list/shopping-list.component';
//#endregion

const accountModule = () => import('@app_account/account.module').then(x => x.AccountModule);

// Service
import { AuthGuard } from '@app_shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/ng-home', pathMatch: 'full' },
  { path: 'ng-home', component: NgHomeComponent },
  { path: 'my-shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
