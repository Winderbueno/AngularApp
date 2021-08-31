//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region App Module
import { MaterialModule } from '@material/material.module';
import { FormModule } from '@form/form.module';
import { ShoppingListRouterModule } from '@shoppingList/shopping-list-router.module';
//#endregion

//#region Effect
import { ShoppingListAPIEffects } from '@shoppingList/store/effect/shopping-list-api.effects';
//#endregion

//#region Component
import {
  DialogAddProductComponent,
  ShoppingListComponent } from '@shoppingList/component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* App Module */
    ShoppingListRouterModule,
    MaterialModule,
    FormModule,

    /* API Effect */
    EffectsModule.forFeature([
      ShoppingListAPIEffects
    ]),
  ],
  declarations: [
    ShoppingListComponent,
    DialogAddProductComponent
  ],
  entryComponents: [ // Component Instantiated at runtime
    DialogAddProductComponent
  ],
})
export class ShoppingListModule { }
