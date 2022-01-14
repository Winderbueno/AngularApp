//#region Angular
import { NgModule } from '@angular/core';
//#endregion

//#region Material UI Component
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
//#endregion

//#region Material UI Component Configuration
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
//#endregion

//#region Material Adaptation for ngrx-form
// See https://ngrx-forms.readthedocs.io/en/master/faq/
import { NgrxMatSelectViewAdapter } from '@material/ngrx-form-adapters/mat-select-view-adapter';
import { CustomErrorStateMatcherDirective } from './ngrx-form-adapters/error-state-matcher';
import { MatListOptionFixDirective } from './ngrx-form-adapters/mat-list-option-fix';
//#endregion


@NgModule({
  imports: [],
  declarations: [
    /* Material Adaptation for ngrx-form */
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
  ],
  exports: [
    /* Material UI Component */
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,

    /* Material Adaptation for ngrx-form */
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
  ],
  providers: [
    /* Material Configuration */
    // TODO - Allow this to be configured in a Conf Module
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: { 
        appearance: 'outline' 
      } 
    },

    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, 
      useValue: { 
        duration: 10000,
        horizontalPosition: 'center' 
      } 
    }
  ],
})
export class MaterialModule {}
