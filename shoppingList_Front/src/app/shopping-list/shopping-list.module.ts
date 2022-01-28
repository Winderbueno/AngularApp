//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { ShoppingListRouterModule } from './shopping-list-router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormModule } from '@form/form.module';
import { MaterialModule } from '@material/material.module';
//#endregion

//#region Store
import * as fromStore from './store/';
//#endregion

//#region Effect
import { ShoppingListAPIEffects } from './effect/';
//#endregion

//#region Component
import {
  DialogAddProductComponent,
  ShoppingListComponent } from './component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    ShoppingListRouterModule,
    FlexLayoutModule,
    FormModule,
    MaterialModule,

    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey,
      fromStore.reducer
    ),

    /* Effect */
    EffectsModule.forFeature([
      ShoppingListAPIEffects
    ]),
  ],
  declarations: [
    ShoppingListComponent,
    DialogAddProductComponent
  ],
  entryComponents: [
    // Component Instantiated at runtime
    DialogAddProductComponent
  ],
})
export class ShoppingListModule {}