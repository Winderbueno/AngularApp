//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region Module
import { AppRouterModule } from '@app/app-router.module';
import { MaterialModule } from '@material/material.module';
import { FormModule } from '@form/form.module';
import { NgrxFormModule } from '@module/ngrx-form/ngrx-form.module';
//#endregion

//#region Component
import {
  CardLayoutComponent,
  FooterComponent,
  ToolbarComponent,
  HomeComponent,
  NgrxFormTestComponent } from './component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    AppRouterModule,
    MaterialModule,
    FormModule,
    NgrxFormModule
  ],
  declarations: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    NgrxFormTestComponent
  ],
  exports: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
