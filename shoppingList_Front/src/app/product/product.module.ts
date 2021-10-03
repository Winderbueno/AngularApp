//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Module
import { MaterialModule } from '@material/material.module';
import { FormModule } from '@form/form.module';
import { ProductRouterModule } from './product-router.module';
//#endregion

//#region Store
import * as fromStore from './store';
//#endregion

//#region Effect
//import {} from './effect/';
//#endregion

//#region Component
//import {} from './component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    ProductRouterModule,
    MaterialModule,
    FormModule,

    /* Store */
    StoreModule.forFeature(fromStore.featureKey, fromStore.reducer),

    /* Effect */
    EffectsModule.forFeature([]),
  ],
  declarations: [
    // TODO - Component
  ],
  entryComponents: [
    // TODO - Component Instantiated at runtime
  ],
})
export class ShoppingListModule { }
