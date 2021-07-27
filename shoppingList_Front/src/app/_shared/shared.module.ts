//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region Declared Component
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
export class SharedModule { }
