//#region Angular & Material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region NgRx Module
import { StoreModule } from '@ngrx/store';
import * as fromLoader from './_store/loader.reducer';
//#endregion

//#region App Module
import { MaterialModule } from '@app_material/material.module';
//#endregion

//#region Component
import {
  LoaderComponent } from './component/';
//#endregion

@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Store */
    StoreModule.forFeature('loader', fromLoader.reducer),

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
