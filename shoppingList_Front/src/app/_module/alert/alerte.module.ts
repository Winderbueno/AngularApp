//#region Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_material/material.module';
//#endregion

//#region Component
import { AlertComponent } from '@app_alert/component/alert.component';
import { SnackbarComponent } from '@app_alert/component/snackbar/snackbar.component';
//#endregion

@NgModule({
  imports: [
    // Angular, Material
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    // Alert
    AlertComponent,
    SnackbarComponent,
  ],
  exports: [
    AlertComponent,
  ]
})
export class AlertModule { }
