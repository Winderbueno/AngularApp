import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/component/shopping-list/shopping-list.component';
import { AngAppHomeTemplateComponent } from './_shared/component/ang-app-home-template/ang-app-home-template.component';

const routes: Routes = [
  { path: '', component: AngAppHomeTemplateComponent },
  { path: 'my-shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
