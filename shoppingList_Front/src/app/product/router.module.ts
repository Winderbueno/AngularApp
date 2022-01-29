//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#endregion

//#region Routed Component
import { ShoppingListComponent } from '@shoppingList/component';
//#endregion

const routes: Routes = [
    {
      path: '', component: ShoppingListComponent, // TODO
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
export class ProductRouterModule { }
