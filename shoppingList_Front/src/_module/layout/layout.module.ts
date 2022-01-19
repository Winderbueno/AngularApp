//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region Module
import { AppRouterModule } from '@app/app-router.module';
import { FormModule } from '@form/form.module';
import { MaterialModule } from '@material/material.module';
//#endregion

//#region Component
import {
  CardLayoutComponent,
  FooterComponent,
  ToolbarComponent,
  HomeComponent,
  FormDemoComponent } from './component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    AppRouterModule,
    FormModule,
    MaterialModule
  ],
  declarations: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    FormDemoComponent
  ],
  exports: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
