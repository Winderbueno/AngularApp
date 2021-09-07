//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region App Module
import { AppRouterModule } from '@app/app-router.module';
import { MaterialModule } from '@material/material.module';
//#endregion

//#region Component
import {
  CardLayoutComponent,
  FooterComponent,
  ToolbarComponent,
  HomeComponent } from './';
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
