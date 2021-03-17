//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
//#endregion

import { AppRoutingModule } from './../app-routing.module';

import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AppNgHomeComponent } from './component/app-ng-home/app-ng-home.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    AppRoutingModule
  ],
  declarations: [
    ToolbarComponent,
    AppNgHomeComponent,
    LoginComponent
  ],
  exports: [ 
    ToolbarComponent,
    AppNgHomeComponent,
    LoginComponent
  ]
})
export class SharedModule { }
