//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region App Module
import { AppRoutingModule } from '@app/app-routing.module';
//#endregion

//#region Declared Component
import { AlertComponent } from './component/alert/alert.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgHomeComponent } from './component/ng-home/ng-home.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
//#endregion

@NgModule({
  imports: [
    // Angular Module
    CommonModule,

    // App Module
    AppRoutingModule, // Used By : ToolBar
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent,
    NgHomeComponent,
    AlertComponent
  ],
  exports: [ 
    ToolbarComponent,
    FooterComponent,
    NgHomeComponent,
    AlertComponent
  ]
})
export class SharedModule { }
