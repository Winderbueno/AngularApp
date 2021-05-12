//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//#endregion

//#region Material Module
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
//#endregion

//#region App Module
import { SharedModule } from '@app_shared/shared.module';
//#endregion

//#region Declared Component
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DialogAddProductComponent } from './dialog-add-product/dialog-add-product.component';
//#endregion

@NgModule({
  imports: [
    // Angular Module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Module
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatSelectModule,
    
    // App Module
    SharedModule
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
