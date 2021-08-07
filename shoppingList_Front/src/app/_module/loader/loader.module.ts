//#region Angular & Material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region App Module
import { MaterialModule } from '@app_material/material.module';
//#endregion

//#region NgRx
import { StoreModule } from '@ngrx/store';
//#endregion

//#region Component
import {
  LoaderComponent } from './component/';
//#endregion

@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* NgRx */
    StoreModule.forRoot({}),

    /* App Module */
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
