//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
//#endregion

//#region Module
import { MaterialModule } from '@material/material.module';
import { LoaderModule } from '@loader/loader.module';
//#endregion

//#region Store
import * as fromStore from './store/';
//#endregion

//#region Component
import {
  InputNgrxFieldComponent } from './component';

//#endregion

@NgModule({
  imports: [
    /* Angular, Ngrx */
    CommonModule,
    ReactiveFormsModule,
    NgrxFormsModule,

    /* Module */
    MaterialModule,
    LoaderModule,

    /* Store */
    StoreModule.forFeature(fromStore.featureKey, fromStore.reducer),
  ],
  declarations: [
    /* Field */
    InputNgrxFieldComponent,

    /* Field Group */
    
  ],
  exports: [
    /* Form Tools */
    ReactiveFormsModule,
    NgrxFormsModule,

    /* Field */
    InputNgrxFieldComponent

    /* Field Group */
    
  ]
})
export class NgrxFormModule { }
