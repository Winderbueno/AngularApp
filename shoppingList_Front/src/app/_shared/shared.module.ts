//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region App Module
import { AppRoutingModule } from '@app/app-routing.module';
//#endregion

//#region Declared Component
import { AlertComponent } from '@app_error_mngt/component/alert/alert.component';
import { SnackbarComponent } from '@app_error_mngt/component/snackbar/snackbar.component';
import { FooterComponent } from './page-layout/footer/footer.component';
import { NgHomeComponent } from './page-layout/ng-home/ng-home.component';
import { ToolbarComponent } from './page-layout/toolbar/toolbar.component';
//#endregion

@NgModule({
  imports: [
    // Angular & Material Module
    CommonModule,
    MaterialModule,

    // App Module
    AppRoutingModule, // Used By : ToolBar
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent,
    NgHomeComponent,
    AlertComponent,
    SnackbarComponent
  ],
  exports: [ 
    ToolbarComponent,
    FooterComponent,
    NgHomeComponent,
    AlertComponent
  ]
})
export class SharedModule { }
