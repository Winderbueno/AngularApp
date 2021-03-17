//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
//#endregion

//#region App Shared Module
import { SharedModule } from '../_shared/shared.module';
//#endregion

import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    SharedModule
  ],
  declarations: [
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
