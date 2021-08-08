//#region Angular & Material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region App Module
import { AppRouterModule } from '@app_router/app-router.module';
import { MaterialModule } from '@app_material/material.module';
//#endregion

//#region Component
import {
  CardLayoutComponent,
  FooterComponent,
  ToolbarComponent,
  HomeComponent } from '@app_layout/component/';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* App Module */
    AppRouterModule,
    MaterialModule,
  ],
  declarations: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent
  ],
  exports: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class LayoutModule { }