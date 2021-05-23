//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region Material Module
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
//#endregion

//#region App Module
import { AppRoutingModule } from '@app/app-routing.module';
//#endregion

//#region Declared Component
import { AlertComponent } from '@app_error_mngt/component/alert/alert.component';
import { FooterComponent } from './page-layout/footer/footer.component';
import { NgHomeComponent } from './page-layout/ng-home/ng-home.component';
import { ToolbarComponent } from './page-layout/toolbar/toolbar.component';
import { SnackbarComponent } from './error-mngt/component/snackbar/snackbar.component';
//#endregion

@NgModule({
  imports: [
    // Angular Module
    CommonModule,

    // Material Module
    MatSnackBarModule,
    MatIconModule,

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
