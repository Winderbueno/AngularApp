//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_shared/material/material.module';
//#endregion

@NgModule({
  imports: [
    // Angular, Material
    CommonModule,
    MaterialModule,
  ],
  declarations: [],
  exports: []
})
export class SharedModule { }
