//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion

//#region Module
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormModule } from '@form/form.module';
import { MaterialModule } from '@material/material.module';
//#endregion

//#region This
import * as Component from './component/';
import * as Page from './page';
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
    /* Page */
    Page.HomePage,

    /* Component */
    Component.AlertComponent,
    Component.ContentComponent,
    Component.FormComponent,
    Component.LoaderComponent
  ],
  exports: [
    Page.HomePage
  ]
})
export class DemoModule { }