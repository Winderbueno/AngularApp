//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
//#endregion

import { AppRoutingModule } from './../app-routing.module';

import { LoginComponent } from './component/login/login.component';
import { NgHomeComponent } from './component/ng-home/ng-home.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule, // For ToolBar
    ReactiveFormsModule, // For Login Compo
    MatInputModule // For Login Compo
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
