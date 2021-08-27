//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region NgRx Module
import { StoreModule } from '@ngrx/store';
//#endregion

//#region App Module
import { MaterialModule } from '@app_material/material.module';
//#endregion

//#region Component
import * as fromAlert from '@alert_store/alert.reducer';
import { AlertComponent } from '@app_alert/component/alert.component';
import { SnackbarComponent } from '@app_alert/component/snackbar/snackbar.component';
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
