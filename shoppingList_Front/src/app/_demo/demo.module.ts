//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region Module
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormModule } from '@form/form.module';
import { MaterialModule } from '@material/material.module';
//#endregion

//#region Component
import {
  AlertComponent,
  ContentComponent,
  FormComponent,
  LoaderComponent,
  RootComponent } from './component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    FlexLayoutModule,
    FormModule,
    MaterialModule    
  ],
  declarations: [
    AlertComponent,
    ContentComponent,
    FormComponent,
    LoaderComponent,
    RootComponent
  ],
  exports: [
    RootComponent
  ]
})
export class DemoModule { }