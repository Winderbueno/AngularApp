import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/shared.module';

import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
