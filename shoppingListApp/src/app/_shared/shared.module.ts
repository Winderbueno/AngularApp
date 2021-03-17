//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
//#endregion

import { AppRoutingModule } from './../app-routing.module';

import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { NgHomeComponent } from './component/ng-home/ng-home.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    AppRoutingModule
  ],
  declarations: [
    ToolbarComponent,
    NgHomeComponent,
    LoginComponent
  ],
  exports: [ 
    ToolbarComponent,
    NgHomeComponent,
    LoginComponent
  ]
})
export class SharedModule { }
