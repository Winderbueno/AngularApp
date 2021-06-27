//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region App Module
import { AppRoutingModule } from '@app/app-routing.module';
//#endregion

//#region Declared Component
import { AlertComponent } from '@app_error/component/alert/alert.component';
import { SnackbarComponent } from '@app_error/component/snackbar/snackbar.component';
//#endregion

@NgModule({
  imports: [
    // Angular, Material Module
    CommonModule,
    MaterialModule,

    // App Module
    AppRoutingModule,
  ],
  declarations: [
    AlertComponent,
    SnackbarComponent
  ],
  exports: [
    AlertComponent
  ]
})
export class SharedModule { }
