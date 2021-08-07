//#region Angular & Material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region App Module
import { MaterialModule } from '@app_material/material.module';
//#endregion

//#region Component
import { AlertComponent } from '@app_alert/component/alert.component';
import { SnackbarComponent } from '@app_alert/component/snackbar/snackbar.component';
//#endregion

@NgModule({
  imports: [
    /* Angular */
    CommonModule,

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
