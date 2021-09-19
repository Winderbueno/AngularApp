//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region App Module
import { MaterialModule } from '@material/material.module';
//#endregion

//#region Store
import * as fromAlert from '@alert/store/alert.reducer';
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

    /* App Module */
    MaterialModule,

    /* Store */
    StoreModule.forFeature('alert', fromAlert.reducer),
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
