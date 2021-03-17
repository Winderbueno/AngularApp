//#region Angular Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
//#endregion

import { AppRoutingModule } from './../app-routing.module';

import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AngAppHomeTemplateComponent } from './component/ang-app-home-template/ang-app-home-template.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    AppRoutingModule
  ],
  declarations: [
    ToolbarComponent,
    AngAppHomeTemplateComponent,
    LoginComponent
  ],
  exports: [ 
    ToolbarComponent,
    AngAppHomeTemplateComponent,
    LoginComponent
  ]
})
export class SharedModule { }
