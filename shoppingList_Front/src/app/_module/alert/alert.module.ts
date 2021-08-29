//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region App Module
import { MaterialModule } from '@material/material.module';
//#endregion

//#region App Model, Action, Selector
import * as fromAlert from '@alert_store/alert.reducer';
import { AlertComponent } from '@alert/component/alert.component';
import { SnackbarComponent } from '@alert/component/snackbar/snackbar.component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Store */
    StoreModule.forFeature('alert', fromAlert.reducer),

    /* App Module */
    MaterialModule,
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
