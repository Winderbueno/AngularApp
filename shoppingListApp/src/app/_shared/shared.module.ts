import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AngAppHomeTemplateComponent } from './component/ang-app-home-template/ang-app-home-template.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    ToolbarComponent,
    AngAppHomeTemplateComponent
  ],
  exports: [ 
    ToolbarComponent,
    AngAppHomeTemplateComponent
  ]
})
export class SharedModule { }
