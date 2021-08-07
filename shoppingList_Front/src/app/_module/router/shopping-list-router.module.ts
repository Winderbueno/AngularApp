//#region Angular & Material
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#endregion

//#region Routed Component
import { ShoppingListComponent } from '@app_shoppingList/.';
//#endregion

const routes: Routes = [
    {
      path: '', component: ShoppingListComponent,
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
