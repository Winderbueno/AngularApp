//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region Module
import { MaterialModule } from '@material/material.module';
//#endregion

//#region Store
import * as fromStore from './store/';
//#endregion

//#region Component
import {
  AlertComponent,
  SnackbarComponent } from './component/';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    MaterialModule,

    /* Store */
    StoreModule.forFeature(fromStore.featureKey, fromStore.reducer),
  ],
  declarations: [
    AlertComponent,
    SnackbarComponent,
  ],
  exports: [
    AlertComponent,
  ]
})
export class AlertModule { }
