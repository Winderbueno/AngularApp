//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region Module
import { AppRouterModule } from '@app/app-router.module';
import { FormModule } from '@form/form.module';
//#endregion

//#region Component
import {
  AlertComponent,
  FormComponent,
  LoaderComponent } from './component';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    CommonModule,

    /* Module */
    AppRouterModule,
    FormModule
  ],
  declarations: [
    AlertComponent,
    FormComponent,
    LoaderComponent
  ],
  exports: [
    AlertComponent,
    FormComponent,
    LoaderComponent
  ]
})
export class DemoModule { }
