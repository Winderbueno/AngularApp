//#region Angular
import { NgModule } from '@angular/core';
//#endregion

//#region Material UI Component
import * as Components from './component';
//#endregion

//#region Material UI Component Configuration
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
//#endregion

//#region Material Library Adapters
// For 'ngrx-forms' -> See https://ngrx-forms.readthedocs.io/en/master/faq/
import { NgrxMatSelectViewAdapter } from './ngrx-forms-adapter/mat-select-view-adapter';
import { CustomErrorStateMatcherDirective } from './ngrx-forms-adapter/error-state-matcher';
import { MatListOptionFixDirective } from './ngrx-forms-adapter/mat-list-option-fix';
// For 'Luxon' -> See https://material.angular.io/components/datepicker/overview/
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
//#endregion


@NgModule({
  imports: [],
  declarations: [
    /* Material Library Adapters */
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
  ],
  exports: [
    /* Material UI Component */
    Components.Components,

    /* Material Library Adapters */
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
    MatLuxonDateModule
  ],
  providers: [
    /* Material UI Component Configuration */
    // TODO - Allow this to be configured in a Conf Module
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: { 
        appearance: 'outline' 
      } 
    },

    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, 
      useValue: { 
        // TODO - Alert auto dismiss should be reimplemented with Ngrx (@timer+action in @alert)
        duration: 10000,
        horizontalPosition: 'left' 
      } 
    }
  ],
})
export class MaterialModule {}