//#region Angular, Material, RxJS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app_shared/module/material.module';
//#endregion

//#region App Module
import { AppRoutingModule } from '@app/app-routing.module';
//#endregion

//#region Declared Component
import { ToolbarComponent } from '@app_layout/component/toolbar/toolbar.component';
import { HomeComponent } from '@app_layout/component/home/home.component';
import { FooterComponent } from '@app_layout/component/footer/footer.component';
import { CardLayoutComponent } from '@app_layout/component/card-layout/card-layout.component';
//#endregion


@NgModule({
  imports: [
    // Angular, Material Module
    CommonModule,
    MaterialModule,

    // App Module
    AppRoutingModule,

  ],
  declarations: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  exports: [
    CardLayoutComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
  ]
})
export class LayoutModule { }
