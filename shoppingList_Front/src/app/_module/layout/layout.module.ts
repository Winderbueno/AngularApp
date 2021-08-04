//#region Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region App Module
import { AppRoutingModule } from '@app/app-routing.module';
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
    // Angular, Material
    CommonModule,
    MaterialModule,

    // App Module
    AppRoutingModule
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
