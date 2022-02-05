//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#endregion

//#region Routed Component
import { RootComponent } from '@shoppingList/component';
//#endregion

const routes: Routes = [
    {
      path: '', component: RootComponent,
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
