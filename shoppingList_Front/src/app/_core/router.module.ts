//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#endregion

//#region Page
import * as fromDemo from '@demo/page';
import * as fromEnterprise from '@enterprise/page';
//#endregion

//#region Guard
import { AuthGuard } from '@shoppingList/guard/auth.guard';
//#endregion


// Lazy loaded module
const accountModule = () => import('@account/account.module').then(x => x.AccountModule);
const shoppingListModule = () => import('@shoppingList/shopping-list.module').then(x => x.ShoppingListModule);

const routes: Routes = [
  // Specific
  { path: 'home', component: fromDemo.HomePage },
  { path: 'account', loadChildren: accountModule },
  { path: 'my-shopping-list', loadChildren: shoppingListModule, canActivate: [AuthGuard] },
  { path: 'enterprise', component: fromEnterprise.HomePage },
  
  // Default
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRouterModule { }
