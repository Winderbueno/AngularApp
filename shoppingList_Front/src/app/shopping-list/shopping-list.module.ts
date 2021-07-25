//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region App Module
import { SharedModule } from '@app_shared/shared.module';
//#endregion

//#region Declared Component
import { DialogAddProductComponent,
  ShoppingListComponent } from './component/';
import { FormModule } from '@app_form/form.module';
//#endregion

@NgModule({
  imports: [
    // Angular, Material Module
    CommonModule,
    MaterialModule,

    // App Module
    SharedModule,
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
