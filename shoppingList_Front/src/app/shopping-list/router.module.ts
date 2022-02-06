//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#endregion

//#region Page
import * as Page from './page';
//#endregion

const routes: Routes = [
    {
      path: '', component: Page.HomePage,
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
export class ShoppingListRouterModule { }
