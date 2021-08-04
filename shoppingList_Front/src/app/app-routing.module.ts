//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#endregion

//#region Routed Component
import { HomeComponent } from '@app_layout/component/home/home.component';
import { ShoppingListComponent } from '@app_shoppingList/shopping-list/shopping-list.component';

//#region App Component, Model, Service
import { AuthGuard } from '@app/_helper/guard/auth.guard';
//#endregion

// Lazy loaded module
const accountModule = () => import('@app_account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'my-shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
