//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region Module
import { AppRouterModule } from '@app/app-router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@material/material.module';
import { FormModule } from '@form/form.module';
//#endregion

//#region Component
import {
  AlertComponent,
  ContentComponent,
  DemoComponent,
  FormComponent,
  LoaderComponent } from './component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    AppRouterModule,
    FlexLayoutModule,
    MaterialModule,
    FormModule
  ],
  declarations: [
    AlertComponent,
    ContentComponent,
    DemoComponent,
    FormComponent,
    LoaderComponent
  ],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
