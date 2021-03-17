//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
//#endregion

import { SharedModule } from '../_shared/shared.module';

import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule
  ],
  declarations: [
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
