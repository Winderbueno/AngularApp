//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region Module
import { AppRouterModule } from '@app/app-router.module';
import { MaterialModule } from '@material/material.module';
//#endregion

//#region Component
import {
  CardLayoutComponent,
  FooterComponent,
  ToolbarComponent } from './component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    AppRouterModule,
    MaterialModule
  ],
  declarations: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent
  ],
  exports: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
