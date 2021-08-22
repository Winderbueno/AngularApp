//#region Angular & Material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region App Module
import { MaterialModule } from '@app_material/material.module';
import { FormModule } from '@app_form/form.module';
import { ShoppingListRouterModule } from '@app_router/shopping-list-router.module';
//#endregion

//#region Component
import {
  DialogAddProductComponent,
  ShoppingListComponent } from '@app/shopping-list/component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* App Module */
    ShoppingListRouterModule,
    MaterialModule,
    FormModule,
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
