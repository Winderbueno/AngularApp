//#region Angular & Material
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#endregion

//#region Routed Component
import { HomeComponent } from '@app_layout/component/home/home.component';
//#endregion

//#region App Component, Model
import { AuthGuard } from '@app_helper/guard/auth.guard';
//#endregion


// Lazy loaded module
const accountModule = () => import('@app_account/account.module').then(x => x.AccountModule);
const shoppingListModule = () => import('@app_shoppingList/shopping-list.module').then(x => x.ShoppingListModule);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'my-shopping-list', loadChildren: shoppingListModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
