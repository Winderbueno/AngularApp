//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_material/material.module';
//#endregion

//#region Declared Component
import {
  LoaderComponent } from './component/';
//#endregion

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    LoaderComponent,
  ],
  exports: [
    LoaderComponent,
  ]
})
export class LoaderModule { }
