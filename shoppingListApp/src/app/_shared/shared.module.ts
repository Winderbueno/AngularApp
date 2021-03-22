//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
//#endregion

//#region App Shared Module
import { AppRoutingModule } from './../app-routing.module';
//#endregion

//#region Module Declared Component
import { LoginComponent } from './business/component/login/login.component';
import { NgHomeComponent } from './business/component/ng-home/ng-home.component';
import { ToolbarComponent } from './business/component/toolbar/toolbar.component';
//#endregion

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
