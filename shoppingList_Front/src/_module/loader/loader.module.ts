//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region App Module
import { MaterialModule } from '@material/material.module';
//#endregion

//#region Store
import * as fromStore from './store/';
//#endregion

//#region Component
import {
  LoaderComponent } from './component/';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* App Module */
    MaterialModule,

    /* Store */
    StoreModule.forFeature('loader', fromStore.reducer),
  ],
  declarations: [
    LoaderComponent,
  ],
  exports: [
    LoaderComponent,
  ]
})
export class LoaderModule { }
